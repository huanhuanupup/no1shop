class Render{
    constructor(){
        this.render=$('.rander_ul');
    }
    init(){
        $.ajax({
            url:'http://localhost/no1shop/php/want.php',
            dataType:'json'
        }).done((data)=>{
            let str='';
            $.each(data, function (index, value) {
                str=`<li class="goods">
                        <div class="wrap">
                        <a href="http://localhost/no1shop/src/details.html?sid=${value.sid}">
                            <img src="${value.url}" alt="">
                        </a>
                            <div class="box clearfix">
                                <div class="title">${value.title}</div>
                                <div class="price">¥
                                    <span>${value.price}</span>
                                </div>
                            </div>
                            <div class="hover">
                                <div class="hover_btn hover_left">
                                    <a href="#">
                                        <i class="icon"></i>
                                    </a>
                                </div>
                                <div class="hover_btn hover_right">
                                    <a href="#">找相似</a>
                                </div>
                            </div>
                    </div>
                </li>`
                // str = '<div><img src="' + value.src + '" height="' + parseInt(value.height) +
                //     '"><p>图片的解释</p></div>';
                $('.render_ul').append(str); //append:相当于原生js--appendChild()
            });
        })
    }
}

export{
    Render
}