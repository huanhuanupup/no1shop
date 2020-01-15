class Detail {
    constructor() {
        this.ul = $('.img_wrap ul');
        this.scale = $('.imgbox');
        this.spic = $('.sImg');
        this.sf = $('.sf');
        this.bpic = $('.bImg');
        this.bf = $('.bf');
        this.title = $('.dright h1');
        this.price = $('.price em');
        this.img = $('.sel_color .item img');
        this.right = $('.diconr');
        this.left = $('.diconl');
        this.id = location.search.split('=')[1];
    }
    init() {
        this.render();//渲染
        this.spic.hover(() => {//鼠标移入小图
            this.sf.show();
            this.bf.show();
            this.sf.css({
                width: this.spic.outerWidth * this.bf.outerWidth / this.bpic.outerWidth,
                //通过计算求得小放的宽
                height: this.spic.outerHeight * this.bf.outerHeight / this.bpic.outerHeight
                //通过计算求得小放的高
            });
            this.bili = this.bpic.outerWidth() / this.spic.outerWidth();//求得比例
            this.spic.on('mousemove', (ev) => {//鼠标在小图移动
                let $fw = ev.pageX - this.spic.offset().left - this.sf.outerWidth() / 2;
                //设置小放的移动距离--宽
                let $fh = ev.pageY - this.spic.offset().top - this.sf.height() / 2;
                //设置小放的移动距离--高
                let $mw = this.spic.outerWidth() - this.sf.outerWidth();
                //小放的最大移动的宽
                let $mh = this.spic.outerHeight() - this.sf.outerHeight();
                //小放的最大移动的高
                if ($fw < 0) {
                    $fw = 0;
                } else if ($fw >= $mw) {
                    $fw = $mw;
                }

                if ($fh < 0) {
                    $fh = 0;
                } else if ($fh >= $mh) {
                    $fh = $mh;
                }

                this.sf.css({
                    left: $fw,
                    top: $fh
                })

                this.bpic.css({
                    left: -$fw * this.bili + 50,
                    top: -$fh * this.bili + 50,
                })
            })
        }, () => {
            this.sf.hide();
            this.bf.hide();
        })
        let _this = this;
        this.ul.on('click', 'li', function () {
            let $ullist = $(this).find('img').attr('src');
            _this.bpic.attr('src', $ullist);
            _this.spic.attr('src', $ullist);
        })
    }
    render() {
        $.ajax({
            type: 'get',
            data: {
                sid: this.id
            },
            url: 'http://localhost/no1shop/php/detail.php',
            dataType: 'json',
        }).done((data) => {
            let urllist = data.urls.split(',');//url转换为数组
            this.spic.attr('src', data.url);
            this.bpic.attr('src', data.url);
            this.title.html(data.title);
            this.price.html(data.price);
            this.img.attr('src', data.url);
            let str = '';
            $.each(urllist, (index, value) => {
                str += `<li>
                <img src="${value}"
                </li>
                `
            });
            this.ul.append(str);
        })
    }
}
export {
    Detail
}