"use strict";

var _child_process = require("child_process");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var comps = ["Affix", "Alert", "Anchor", "AutoComplete", "Avatar", "FloatButton", "BackTop", "Badge", "Breadcrumb", "Button", "Calendar", "Card", "Carousel", "Cascader", "Checkbox", "Col", "Collapse", "ConfigProvider", "DatePicker", "Descriptions", "Divider", "Drawer", "Dropdown", "Empty", "Form", "Grid", "Image", "Input", "InputNumber", "Layout", "List", "Mentions", "Menu", "message", "Modal", "notification", "Pagination", "Popconfirm", "Popover", "Progress", "Radio", "Rate", "Result", "Row", "Segmented", "Select", "Skeleton", "Slider", "Space", "Spin", "Statistic", "Steps", "Switch", "Table", "Tabs", "Tag", "theme", "TimePicker", "Timeline", "Tooltip", "Tour", "App", "Transfer", "Tree", "TreeSelect", "Typography", "Upload", "Watermark", "QRCode", "version"];
function gen(c, l) {
  var m4 = "include(tsx.m4)IMF(react,React);IMDF(".concat(l, ",").concat(c, ");IMF(react-dom/server,* as RS);\n  RFC(Gen").concat(c, ",,div,,<").concat(c, "></").concat(c, ">);export default () => RS.renderToStaticMarkup(<Gen").concat(c, " />);");
  _fs["default"].writeFileSync("__tmp.m4", m4);
  (0, _child_process.execSync)("m4 __tmp.m4 > __tmp.jsx", {
    stdio: "inherit"
  });
  (0, _child_process.execSync)("./compile.sh __tmp.jsx > __tmp.js", {
    stdio: "inherit"
  });
  return require("./__tmp.js")["default"]();
}
var gen_ant = function gen_ant(c) {
  return gen(c, "antd");
};
(0, _child_process.execSync)("echo 'in, out' > comps.csv");
comps.forEach(function (c) {
  var out = gen_ant(c);
  (0, _child_process.execSync)("echo '".concat(c, ",").concat(out, "' >> comps.csv"));
});

