class Fixed{
    constructor(){
        this.Fixed=$('#header_fixed');
    }
    init(){
        $(window).on('scroll', ()=> {
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
    // init(){
    //     $(window).on('scroll', function() {
    //         let $top = $(window).scrollTop(); //获取top值
    //         if ($top >= 850) {
    //             $('#header_fixed').stop(true).animate({
    //                 top: 0
    //             });
    //         } else {
    //             $('#header_fixed').stop(true).animate({
    //                 top: -60
    //             });
    //         }
    //     });
    // }
}

export{
    Fixed
}