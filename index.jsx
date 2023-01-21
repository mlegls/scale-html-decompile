import React from "react";
import { Button } from "antd";

import * as RS from "react-dom/server";

function B() {
  return <Button>Text</Button>;
}

const out = RS.renderToReadableStream(<B />);
console.log(out);