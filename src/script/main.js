import "jquery";//引入jquery
import "../css/index.css";
import "../css/details.css";
// import ".../css/.css";
import { Fixed } from "./Fixed.js";//添加头部固定
new Fixed().init();
import { HF } from "./HF.js";
new HF().init();
import { Banner } from "./Banner.js";
new Banner().init();
import { Aside } from "./Aside.js";
new Aside().init();
import{ Render } from "./indexrender.js";
new Render().init();

import{ Detail } from "./Detail.js";
new Detail().init();

import{ Tab } from "./tabswitch.js";
new Tab().init();