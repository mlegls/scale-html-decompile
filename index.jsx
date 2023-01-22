import { execSync } from "child_process";
import fs from "fs";
import * as babel from "@babel/core";

const comps = ["Affix","Alert","Anchor","AutoComplete","Avatar","FloatButton","BackTop","Badge","Breadcrumb","Button","Calendar","Card","Carousel","Cascader","Checkbox","Col","Collapse","ConfigProvider","DatePicker","Descriptions","Divider","Drawer","Dropdown","Empty","Form","Grid","Image","Input","InputNumber","Layout","List","Mentions","Menu","Modal","notification","Pagination","Popconfirm","Popover","Progress","Radio","Rate","Result","Row","Segmented","Select","Skeleton","Slider","Space","Spin","Statistic","Steps","Switch","Table","Tabs","Tag","TimePicker","Timeline","Tooltip","Tour","App","Transfer","Tree","TreeSelect","Typography","Upload","Watermark","QRCode"]

function gen(c,l) {
  const m4 = `include(tsx.m4)IMF(react,React);IMDF(${l},${c});IMF(react-dom/server,* as RS);
  RFC(Appl,,div,,<${c}>Sample</${c}>);export default () => RS.renderToString(<Appl />);`;
  let jsx = execSync(`m4`, {stdio: "pipe", input: m4}).toString();
  let { code } = babel.transformSync(jsx, {
    presets: ["@babel/preset-react", "@babel/preset-env"],
  });
  fs.writeFileSync(`tmp/${c}.js`, code);
  return require(`./tmp/${c}.js`).default();
}

const gen_ant= c=> gen(c,"antd");

execSync("echo 'html, component' > comps.csv");
comps.forEach(c => {
  // let out = gen_ant(c);
  let out
  try {
    out = gen_ant(c);
  } catch (e) {
    out = "!!EXCEPTION!!"
    console.log(`${c} failed with ${e}`);
  }
  execSync(`echo '${out},${c}' >> comps.csv`);
});

//console.log(gen_ant("Button"));