import { animationApi } from "./api/animation.js";
import { audioApi } from "./api/audio.js";
import { canvasApi } from "./api/canvas.js";
import { clipboardApi } from "./api/clipboard.js";
import { coreApi } from "./api/core.js";
import { dndApi } from "./api/dnd.js";
import { fetchApi } from "./api/fetch.js";
import { fileApi } from "./api/file.js";
import { indexedDbApi } from "./api/indexeddb.js";
import { mediaApi } from "./api/media.js";
import { mediaSourceApi } from "./api/mediasource.js";
import { notificationApi } from "./api/notification.js";
import { performanceApi } from "./api/performance.js";
import { permissionsApi } from "./api/permissions.js";
import { resizeObserverApi } from "./api/resizeobserver.js";
import { rtcApi } from "./api/rtc.js";
import { storageApi } from "./api/storage.js";
import { streamApi } from "./api/stream.js";
import { webglApi } from "./api/webgl.js";
import { websocketApi } from "./api/websocket.js";
import { xhrApi } from "./api/xhr.js";

export const api = {
  "animation": animationApi,
  "audio": audioApi,
  "canvas": canvasApi,
  "clipboard": clipboardApi,
  "core": coreApi,
  "dnd": dndApi,
  "fetch": fetchApi,
  "file": fileApi,
  "indexed-db": indexedDbApi,
  "media": mediaApi,
  "media-source": mediaSourceApi,
  "notification": notificationApi,
  "performance": performanceApi,
  "permissions": permissionsApi,
  "resize-observer": resizeObserverApi,
  "rtc": rtcApi,
  "storage": storageApi,
  "stream": streamApi,
  "webgl": webglApi,
  "websocket": websocketApi,
  "xhr": xhrApi,
};
