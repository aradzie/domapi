import { animationApi } from "./api/animation.js";
import { audioApi } from "./api/audio.js";
import { canvasApi } from "./api/canvas.js";
import { clipboardApi } from "./api/clipboard.js";
import { coreApi } from "./api/core.js";
import { cssApi } from "./api/css.js";
import { dndApi } from "./api/dnd.js";
import { fetchApi } from "./api/fetch.js";
import { fileApi } from "./api/file.js";
import { htmlApi } from "./api/html.js";
import { indexedDbApi } from "./api/indexeddb.js";
import { mediaApi } from "./api/media.js";
import { mediaSourceApi } from "./api/mediasource.js";
import { notificationApi } from "./api/notification.js";
import { performanceApi } from "./api/performance.js";
import { permissionsApi } from "./api/permissions.js";
import { resizeObserverApi } from "./api/resizeobserver.js";
import { rtcApi } from "./api/rtc.js";
import { streamApi } from "./api/stream.js";
import { svgApi } from "./api/svg.js";
import { webglApi } from "./api/webgl.js";
import { websocketApi } from "./api/websocket.js";
import { xhrApi } from "./api/xhr.js";
import { xmlApi } from "./api/xml.js";

export const api = {
  "animation": animationApi,
  "audio": audioApi,
  "canvas": canvasApi,
  "clipboard": clipboardApi,
  "core": coreApi,
  "css": cssApi,
  "dnd": dndApi,
  "fetch": fetchApi,
  "file": fileApi,
  "html": htmlApi,
  "indexed-db": indexedDbApi,
  "media-source": mediaSourceApi,
  "media": mediaApi,
  "notification": notificationApi,
  "performance": performanceApi,
  "permissions": permissionsApi,
  "resize-observer": resizeObserverApi,
  "rtc": rtcApi,
  "stream": streamApi,
  "svg": svgApi,
  "webgl": webglApi,
  "websocket": websocketApi,
  "xhr": xhrApi,
  "xml": xmlApi,
};
