class Detail{
    constructor(){
        this.scale=$('.imgbox');
        this.spic=$('.sImg');
        this.sf=$('.sf');
        this.bpic=$('.bImg');
        this.bf=$('.bf');
        this.title=$('.dright h1');
        this.price=$('.price em');
        this.img=$('.sel_color .item img');
        this.ul=$('.img_wrap ul');
        this.list=$('.img_wrap ul li');
        this.id = location.search.split('=')[1];
    }
    init(){
        this.render();
        // this.scale();
        this.spic.hover(()=>{
            this.sf.show();
            this.bf.show();
        },()=>{
            // this.sf.hide();
            this.bf.hide();
        })
    }
    render(){
        $.ajax({
            type:'get',
            data:{
                sid:this.id
            },
            url:'http://localhost/no1shop/php/detail.php',
            dataType:'json',
        }).done((data)=>{
            let urllist=data.urls.split(',');//url转换为数组
            this.spic.attr('src',data.url);
            this.bpic.attr('src',data.url);
            this.title.html(data.title);
            this.price.html(data.price);
            this.img.attr('src',data.url);
            let str='';
            $.each(urllist,(index,value) => {
                str+=`<li>
                <img src="${value}"
                </li>
                `
            });
            this.ul.append(str);
        })
    }
    // scale(){
    //     this.spic.hover(()=>{
    //         $('.sImg').css("cursor:pointer");
    //         this.bf.show();
    //     },()=>{

    //     })
    // }
    
}
export{
    Detail
}