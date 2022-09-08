import type {
  CacheStorage,
  Console,
  Crypto,
  CSSStyleDeclaration,
  CustomElementRegistry,
  Document,
  Element,
  FrameRequestCallback,
  History,
  IDBFactory,
  IdleRequestCallback,
  IdleRequestOptions,
  ImageBitmap,
  ImageBitmapOptions,
  ImageBitmapSource,
  Location,
  MediaQueryList,
  Navigator,
  Performance,
  RequestInfo,
  RequestInit,
  Response,
  Screen,
  Selection,
  SpeechSynthesis,
  Storage,
  StructuredSerializeOptions,
  TimerHandler,
  Transferable,
  VoidFunction,
  Window,
  WindowPostMessageOptions,
  WindowProxy,
} from "./types.js";

declare var console: Console;
declare var customElements: CustomElementRegistry;
declare var devicePixelRatio: number;
declare var document: Document;
declare var frameElement: Element | null;
declare var frames: WindowProxy;
declare var history: History;
declare var location: Location;
declare var navigator: Navigator;
declare var screen: Screen;
declare var speechSynthesis: SpeechSynthesis;
declare var window: Window;

declare function getComputedStyle(
  elt: Element,
  pseudoElt?: string | null,
): CSSStyleDeclaration;

declare function getSelection(): Selection | null;

declare function matchMedia(query: string): MediaQueryList;

/**
 * Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.
 *
 * Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.
 *
 * A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.
 *
 * If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".
 *
 * Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.
 */
declare function postMessage(
  message: any,
  targetOrigin: string,
  transfer?: Transferable[],
): void;
declare function postMessage(
  message: any,
  options?: WindowPostMessageOptions,
): void;

declare function requestIdleCallback(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions,
): number;

declare function cancelAnimationFrame(handle: number): void;

declare function requestAnimationFrame(callback: FrameRequestCallback): number;

declare var localStorage: Storage;
/** Available only in secure contexts. */
declare var caches: CacheStorage;
declare var crossOriginIsolated: boolean;
declare var crypto: Crypto;
declare var indexedDB: IDBFactory;
declare var isSecureContext: boolean;
declare var origin: string;
declare var performance: Performance;

declare function atob(data: string): string;

declare function btoa(data: string): string;

declare function clearInterval(id: number | undefined): void;

declare function clearTimeout(id: number | undefined): void;

declare function createImageBitmap(
  image: ImageBitmapSource,
  options?: ImageBitmapOptions,
): Promise<ImageBitmap>;
declare function createImageBitmap(
  image: ImageBitmapSource,
  sx: number,
  sy: number,
  sw: number,
  sh: number,
  options?: ImageBitmapOptions,
): Promise<ImageBitmap>;

declare function fetch(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response>;

declare function queueMicrotask(callback: VoidFunction): void;

declare function reportError(e: any): void;

declare function setInterval(
  handler: TimerHandler,
  timeout?: number,
  ...arguments: any[]
): number;

declare function setTimeout(
  handler: TimerHandler,
  timeout?: number,
  ...arguments: any[]
): number;

declare function structuredClone(
  value: any,
  options?: StructuredSerializeOptions,
): any;

declare var sessionStorage: Storage;

export {
  console,
  customElements,
  devicePixelRatio,
  document,
  frameElement,
  frames,
  history,
  location,
  navigator,
  screen,
  speechSynthesis,
  window,
  getComputedStyle,
  getSelection,
  matchMedia,
  postMessage,
  requestIdleCallback,
  cancelAnimationFrame,
  requestAnimationFrame,
  localStorage,
  caches,
  crossOriginIsolated,
  crypto,
  indexedDB,
  isSecureContext,
  origin,
  performance,
  atob,
  btoa,
  clearInterval,
  clearTimeout,
  createImageBitmap,
  fetch,
  queueMicrotask,
  reportError,
  setInterval,
  setTimeout,
  structuredClone,
  sessionStorage,
};
