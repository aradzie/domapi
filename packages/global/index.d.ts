export interface WindowGeometry {
  readonly innerHeight: number;
  readonly innerWidth: number;
  readonly outerHeight: number;
  readonly outerWidth: number;
  readonly screenLeft: number;
  readonly screenTop: number;
  readonly screenX: number;
  readonly screenY: number;
  readonly scrollX: number;
  readonly scrollY: number;
  resizeBy(x: number, y: number): void;
  resizeTo(width: number, height: number): void;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
  moveBy(x: number, y: number): void;
  moveTo(x: number, y: number): void;
}

export interface WindowModal {
  alert(message?: any): void;
  confirm(message?: string): boolean;
  prompt(message?: string, _default?: string): string | null;
}

export interface WindowUI {
  readonly locationbar: BarProp;
  readonly menubar: BarProp;
  readonly personalbar: BarProp;
  readonly scrollbars: BarProp;
  readonly statusbar: BarProp;
  readonly toolbar: BarProp;
  readonly closed: boolean;
  focus(): void;
  blur(): void;
  close(): void;
  open(
    url?: string | URL,
    target?: string,
    features?: string,
  ): WindowProxy | null;
}

/**
 * A custom window interface which copies from the standard Window,
 * but omits the deprecated properties and the properties which must
 * be explicitly imported.
 *
 * ```
 * // wrong
 * console.log(windows.document.title);
 *
 * // right
 * @import { document } from "@domapi/global";
 * console.log(document.title);
 * ```
 */
export interface CustomWindow
  extends EventTarget,
    AnimationFrameProvider,
    WindowOrWorkerGlobalScope,
    WindowGeometry,
    WindowModal,
    WindowUI {
  cancelIdleCallback(handle: number): void;
  requestIdleCallback(
    callback: IdleRequestCallback,
    options?: IdleRequestOptions,
  ): number;
  name: string;
  readonly frameElement: Element | null;
  readonly frames: WindowProxy;
  readonly parent: WindowProxy;
  readonly top: WindowProxy | null;
  get location(): Location;
  set location(href: string | Location);
  addEventListener<K extends keyof WindowEventMap>(
    type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof WindowEventMap>(
    type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

interface CreateImageBitmap {
  (
    image: ImageBitmapSource,
    options?: ImageBitmapOptions,
  ): Promise<ImageBitmap>;
  (
    image: ImageBitmapSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    options?: ImageBitmapOptions,
  ): Promise<ImageBitmap>;
}

interface Fetch {
  (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

interface GetComputedStyle {
  (elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
}

interface GetSelection {
  (): Selection | null;
}

interface MatchMedia {
  (query: string): MediaQueryList;
}

interface StructuredClone {
  (value: any, options?: StructuredSerializeOptions): any;
}

export declare const createImageBitmap: CreateImageBitmap;
export declare const crypto: Crypto;
export declare const customElements: CustomElementRegistry;
export declare const devicePixelRatio: number;
export declare const document: Document;
export declare const fetch: Fetch;
export declare const getComputedStyle: GetComputedStyle;
export declare const getSelection: GetSelection;
export declare const history: History;
export declare const indexedDB: IDBFactory;
export declare const localStorage: Storage;
export declare const matchMedia: MatchMedia;
export declare const navigator: Navigator;
export declare const performance: Performance;
export declare const screen: Screen;
export declare const sessionStorage: Storage;
export declare const structuredClone: StructuredClone;
export declare const visualViewport: VisualViewport;
export declare const window: CustomWindow;
export declare const isBrowser: boolean;
export declare const isServer: boolean;
export declare const runtime: "browser" | "server";
