"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _child_process = require("child_process");
var _fs = _interopRequireDefault(require("fs"));
var babel = _interopRequireWildcard(require("@babel/core"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var comps = ["Affix", "Alert", "Anchor", "AutoComplete", "Avatar", "FloatButton", "BackTop", "Badge", "Breadcrumb", "Button", "Calendar", "Card", "Carousel", "Cascader", "Checkbox", "Col", "Collapse", "ConfigProvider", "DatePicker", "Descriptions", "Divider", "Drawer", "Dropdown", "Empty", "Form", "Grid", "Image", "Input", "InputNumber", "Layout", "List", "Mentions", "Menu", "Modal", "notification", "Pagination", "Popconfirm", "Popover", "Progress", "Radio", "Rate", "Result", "Row", "Segmented", "Select", "Skeleton", "Slider", "Space", "Spin", "Statistic", "Steps", "Switch", "Table", "Tabs", "Tag", "TimePicker", "Timeline", "Tooltip", "Tour", "App", "Transfer", "Tree", "TreeSelect", "Typography", "Upload", "Watermark", "QRCode"];
function gen(c, l) {
  var m4 = "include(tsx.m4)IMF(react,React);IMDF(".concat(l, ",").concat(c, ");IMF(react-dom/server,* as RS);\n  RFC(Appl,,div,,<").concat(c, ">Sample</").concat(c, ">);export default () => RS.renderToString(<Appl />);");
  var jsx = (0, _child_process.execSync)("m4", {
    stdio: "pipe",
    input: m4
  }).toString();
  var _babel$transformSync = babel.transformSync(jsx, {
      presets: ["@babel/preset-react", "@babel/preset-env"]
    }),
    code = _babel$transformSync.code;
  _fs["default"].writeFileSync("tmp/".concat(c, ".js"), code);
  return require("./tmp/".concat(c, ".js"))["default"]();
}
var gen_ant = function gen_ant(c) {
  return gen(c, "antd");
};
(0, _child_process.execSync)("echo 'component,html' > comps.csv");
comps.forEach(function (c) {
  // let out = gen_ant(c);
  var out;
  try {
    out = gen_ant(c);
  } catch (e) {
    out = "!!EXCEPTION!!";
    console.log("".concat(c, " failed with ").concat(e));
  }
  (0, _child_process.execSync)("echo '".concat(c, ",").concat(out, "' >> comps.csv"));
});

//console.log(gen_ant("Button"));

