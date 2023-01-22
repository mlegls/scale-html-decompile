import { execSync } from "child_process";
import fs from "fs";

const comps = ["Affix","Alert","Anchor","AutoComplete","Avatar","FloatButton","BackTop","Badge","Breadcrumb","Button","Calendar","Card","Carousel","Cascader","Checkbox","Col","Collapse","ConfigProvider","DatePicker","Descriptions","Divider","Drawer","Dropdown","Empty","Form","Grid","Image","Input","InputNumber","Layout","List","Mentions","Menu","Modal","notification","Pagination","Popconfirm","Popover","Progress","Radio","Rate","Result","Row","Segmented","Select","Skeleton","Slider","Space","Spin","Statistic","Steps","Switch","Table","Tabs","Tag","TimePicker","Timeline","Tooltip","Tour","App","Transfer","Tree","TreeSelect","Typography","Upload","Watermark","QRCode"]

function gen(c,l) {
  const m4 = `include(tsx.m4)IMF(react,React);IMDF(${l},${c});IMF(react-dom/server,* as RS);
  RFC(Appl,,div,,<${c}>Sample</${c}>);export default () => RS.renderToStaticMarkup(<Appl />);`;
  fs.writeFileSync("__tmp.m4", m4);
  execSync(`m4 __tmp.m4 > __tmp.jsx`, {stdio: "inherit"})
  execSync(`./compile.sh __tmp.jsx > __tmp.js`, {stdio: "inherit"});
  return require("./__tmp.js").default();
}

const gen_ant= c=> gen(c,"antd");

/*
execSync("echo 'in, out' > comps.csv");
comps.forEach(c => {
  const out = gen_ant(c);
  execSync(`echo '${c},${out}' >> comps.csv`);
});
*/

console.log(gen_ant("Affix"));