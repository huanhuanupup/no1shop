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
export { Banner } 