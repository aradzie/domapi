# Modular Browser API

This is a set of libraries, linter and bundler plugins to encourage the usage
of browser API in such a way, as if the globals do not exist and everything
must be `import`ed:

```javascript
import { window, isBrowser } from "@domapi/global";

if (isBrowser) {
  window.addEventListener("load", (ev) => {
    //
  });
}
```

When run in the browser:

```javascript
// The imported names point back to the names from the global scope.

const isBrowser = true;

console.log(typeof window); // "object"

if (isBrowser) {
  window.addEventListener("load", (ev) => {
    //
  });
}
```

When run in the node server:

```javascript
// The imported names are replaced by dummy values.

const window = undefined;
const isBrowser = false;

console.log(typeof window); // "undefined"

if (isBrowser) {
  window.addEventListener("load", (ev) => {
    //
  });
}
```

When run in the node test runner:

```javascript
// The imported names are taken from JSDOM.

const window = jsdom.window;
const isBrowser = true;

console.log(typeof window); // "object"

if (isBrowser) {
  window.addEventListener("load", (ev) => {
    //
  });
}
```
