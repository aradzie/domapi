"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const animation_js_1 = require("./api/animation.js");
const audio_js_1 = require("./api/audio.js");
const canvas_js_1 = require("./api/canvas.js");
const clipboard_js_1 = require("./api/clipboard.js");
const core_js_1 = require("./api/core.js");
const css_js_1 = require("./api/css.js");
const dnd_js_1 = require("./api/dnd.js");
const fetch_js_1 = require("./api/fetch.js");
const file_js_1 = require("./api/file.js");
const html_js_1 = require("./api/html.js");
const indexeddb_js_1 = require("./api/indexeddb.js");
const media_js_1 = require("./api/media.js");
const mediasource_js_1 = require("./api/mediasource.js");
const notification_js_1 = require("./api/notification.js");
const performance_js_1 = require("./api/performance.js");
const permissions_js_1 = require("./api/permissions.js");
const resizeobserver_js_1 = require("./api/resizeobserver.js");
const rtc_js_1 = require("./api/rtc.js");
const stream_js_1 = require("./api/stream.js");
const svg_js_1 = require("./api/svg.js");
const webgl_js_1 = require("./api/webgl.js");
const websocket_js_1 = require("./api/websocket.js");
const xhr_js_1 = require("./api/xhr.js");
const xml_js_1 = require("./api/xml.js");
exports.api = {
  "animation": animation_js_1.animationApi,
  "audio": audio_js_1.audioApi,
  "canvas": canvas_js_1.canvasApi,
  "clipboard": clipboard_js_1.clipboardApi,
  "core": core_js_1.coreApi,
  "css": css_js_1.cssApi,
  "dnd": dnd_js_1.dndApi,
  "fetch": fetch_js_1.fetchApi,
  "file": file_js_1.fileApi,
  "html": html_js_1.htmlApi,
  "indexed-db": indexeddb_js_1.indexedDbApi,
  "media-source": mediasource_js_1.mediaSourceApi,
  "media": media_js_1.mediaApi,
  "notification": notification_js_1.notificationApi,
  "performance": performance_js_1.performanceApi,
  "permissions": permissions_js_1.permissionsApi,
  "resize-observer": resizeobserver_js_1.resizeObserverApi,
  "rtc": rtc_js_1.rtcApi,
  "stream": stream_js_1.streamApi,
  "svg": svg_js_1.svgApi,
  "webgl": webgl_js_1.webglApi,
  "websocket": websocket_js_1.websocketApi,
  "xhr": xhr_js_1.xhrApi,
  "xml": xml_js_1.xmlApi,
};
//# sourceMappingURL=api.js.map
