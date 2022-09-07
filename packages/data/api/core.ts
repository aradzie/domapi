import { cssApi } from "./css.js";
import { domApi } from "./dom.js";
import { htmlApi } from "./html.js";
import { svgApi } from "./svg.js";
import { xmlApi } from "./xml.js";

export const coreApi: readonly string[] = [
  ...domApi,
  ...htmlApi,
  ...svgApi,
  ...xmlApi,
  ...cssApi,
];
