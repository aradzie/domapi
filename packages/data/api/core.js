"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreApi = void 0;
const css_js_1 = require("./css.js");
const dom_js_1 = require("./dom.js");
const html_js_1 = require("./html.js");
const svg_js_1 = require("./svg.js");
const xml_js_1 = require("./xml.js");
exports.coreApi = [
    ...dom_js_1.domApi,
    ...html_js_1.htmlApi,
    ...svg_js_1.svgApi,
    ...xml_js_1.xmlApi,
    ...css_js_1.cssApi,
];
//# sourceMappingURL=core.js.map