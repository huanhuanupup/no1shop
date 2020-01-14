import "jquery";//引入jquery
import { HF } from "./includeHF.js";//引入页头页尾
new HF().init();
import { Fixed } from "./headerfixed.js";//添加头部固定
new Fixed().init();
import{ Render } from "./indexrender.js";
new Render().init();

import{ Detail } from "./Detail.js";
new Detail().init();