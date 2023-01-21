"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _child_process = require("child_process");
var _fs = _interopRequireDefault(require("fs"));
var RS = _interopRequireWildcard(require("react-dom/server"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function B() {
  return /*#__PURE__*/_react["default"].createElement(_antd.Button, null, "Text");
}
var out = RS.renderToStaticMarkup( /*#__PURE__*/_react["default"].createElement(B, null));
function gen(c) {
  var m4 = "include(tsx.m4)IMF(react,React);IMDF(antd,".concat(c, ");IMF(react-dom/server,* as RS);\n  RFC(Gen").concat(c, ",,Button,,Sample Text);export default () => RS.renderToStaticMarkup(<Gen").concat(c, " />);");
  _fs["default"].writeFileSync("__tmp.m4", m4);
  (0, _child_process.execSync)("m4 __tmp.m4 > __tmp.jsx", {
    stdio: "inherit"
  });
  (0, _child_process.execSync)("./compile.sh __tmp.jsx > __tmp.js", {
    stdio: "inherit"
  });
  return require("./__tmp.js")["default"]();
}
console.log(gen("Button"));

