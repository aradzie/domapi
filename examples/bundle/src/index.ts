import { isBrowser, isServer, runtime, window } from "@domapi/global";

console.log("process.env.NODE_ENV=" + process.env.NODE_ENV);
console.log({ isBrowser, isServer, runtime });

if (isBrowser) {
  console.log("is browser runtime");
  window.addEventListener("error", (ev) => {
    console.error(ev);
  });
  window.addEventListener("unhandledrejection", (ev) => {
    console.error(ev);
  });
}

if (isServer) {
  console.log("is server runtime");
}
