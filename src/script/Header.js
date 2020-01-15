class Fixed {
    constructor() {
        this.Fixed = $('#header_fixed');
    }
    init() {
        $(window).on('scroll', () => {
            let $top = $(window).scrollTop(); //获取top值
            if ($top >= 850) {
                this.Fixed.stop(true).animate({
                    top: 0
                });
            } else {
                this.Fixed.stop(true).animate({
                    top: -60
                });
            }
        });
    }
}

class HF {
    constructor() {
        this.header = $('#header');
        this.footer = $('#footer');
        this.timer = null;
    }
    init() {
        $(document).ready(() => {
            this.header.load("http://localhost/no1shop/src/header.html");
            //在页面装载时，在ID为#header的DOM元素里插入header.html的内容。
            //加载页头
            this.footer.load("http://localhost/no1shop/src/footer.html");
            //在页面装载时，在ID为#header的DOM元素里插入header.html的内容。
            //加载页尾
        });
    }
}

class Banner {
    constructor() {
        this.pic = $('.ban_pic li');
        this.tab = $('.ban_tab li');
        this.index = 0;
        this.timer = null;
    }
    init() {
        let _this = this;
        this.tab.eq(0).addClass('active').siblings('li').removeClass('active');
        this.pic.eq(0).css({
            'opacity': 1,
            'z-index': 1
        }).siblings('li').css({
            'opacity': 0,
            'z-index': 0
        })
        this.tab.on('mouseover', function () {
            _this.index = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            $('.ban_pic li').eq($(this).index()).css({
                'opacity': 1,
                'z-index': 1
            }).siblings('li').css({
                'opacity': 0,
                'z-index': 0
            })
            clearInterval(_this.timer);
        })
        this.tab.on('mouseout', function () {
            _this.autoplay($(this).index());
        })
        this.pic.on('mouseover',function(){
            clearInterval(_this.timer);
        })
        this.pic.on('mouseout',function(){
            _this.autoplay($(this).index());
        })
        this.autoplay($(this).index());
    }
    autoplay(index) {
        this.timer = setInterval(() => {
            index++;
            if (index > 2) {
                index = 0;
            }
            this.tab.eq(index).addClass('active').siblings('li').removeClass('active');
            $('.ban_pic li').eq(index).css({
                'opacity': 1,
                'z-index': 1
            }).siblings('li').css({
                'opacity': 0,
                'z-index': 0
            })
        }, 3000);
    }
}

class Aside {
    constructor() {
        this.aside = $('#aside');
        this.totop=$('.a_bottom');

    }
    init() {
        $(window).on('scroll', () => {
            let $top = $(window).scrollTop(); //获取top值
            if ($top >= 680) {
                this.aside.css({
                    "position":"fixed",
                    "top":156,
                })
            } else {
                this.aside.css({
                    "position": "absolute",
                    "top": 0,
                });
            }
        });
        this.totop.on('click',function(){
            $(window).scrollTop(0);
        })
    }
}

class Floor{
    constructor(){

    }
    init(){

    }
}

export {
    Fixed, HF, Banner, Aside,Floor
}