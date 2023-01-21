import React from "react";
import { Button } from "antd";
import { execSync } from "child_process";
import fs from "fs";

import * as RS from "react-dom/server";

function B() {
  return <Button>Text</Button>;
}

const out = RS.renderToStaticMarkup(<B />);

function gen(c) {
  let m4 = `include(tsx.m4)IMF(react,React);IMDF(antd,${c});IMF(react-dom/server,* as RS);
  RFC(Gen${c},,Button,,Sample Text);export default () => RS.renderToStaticMarkup(<Gen${c} />);`;
  fs.writeFileSync("__tmp.m4", m4);
  execSync(`m4 __tmp.m4 > __tmp.jsx`, {stdio: "inherit"})
  execSync(`./compile.sh __tmp.jsx > __tmp.js`, {stdio: "inherit"});
  return require("./__tmp.js").default();
}

console.log(gen("Button"));