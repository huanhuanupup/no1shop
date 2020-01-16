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
        this.add = $('.add');
        this.reduce = $('.reduce');
        this.Dvalue = $('.goodsnum');
        this.id = location.search.split('=')[1];
    }
    init() {
        this.render();//渲染
        this.count();//计算件数
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
            this.list = $('.img_wrap ul li');
            this.num = this.list.size();
            this.tab();
        })
    }
    tab() {
        let _this = this;
        this.right.on('click', () => {
            // console.log(_this.num);
            this.ul.stop(true).animate({
                left: -(_this.num - 5) * _this.list.outerWidth(true)
            })
        })
        this.left.on('click', () => {
            this.ul.stop(true).animate({
                left: 0
            })
        })
    }
    count() {
        // let co = parseInt(this.Dvalue.val());
        this.add.on('click', () => {
            let co = this.Dvalue.val();
            co++;
            this.Dvalue.val(co);
        })

        this.reduce.on('click', () => {
            let co = this.Dvalue.val();
            co--;
            if (co < 2) {
                co = 1;
            }
            this.Dvalue.val(co);
        })

        this.Dvalue.change(()=>{
            let co=this.Dvalue.val();
            if(co<=1){
                co=1;
            }else if(co==''){
                co=1;
            }
            this.Dvalue.val(co);
        })
    }
}
export {
    Detail
}