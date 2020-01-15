import "jquery";//引入jquery
import "../css/index.css";
import "../css/details.css";
// import ".../css/.css";
import { Fixed,HF,Banner,Aside,Floor } from "./Header.js";//添加头部固定
new HF().init();
new Fixed().init();
new Banner().init();
new Aside().init();
new Floor().init();
import{ Render } from "./indexrender.js";
new Render().init();

import{ Detail } from "./Detail.js";
new Detail().init();