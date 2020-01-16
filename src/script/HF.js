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
export{
    HF
}