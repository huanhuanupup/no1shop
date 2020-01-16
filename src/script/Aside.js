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
                    "margin-left":540,
                    "position":"fixed",
                    "top":156,
                })
            } else {
                this.aside.css({
                    "margin-left":540,
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
export { Aside }