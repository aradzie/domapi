"use strict";

const { api } = require("@domapi/data");
const { mkdirSync, writeFileSync } = require("node:fs");
const { resolve } = require("node:path");

const generate = (key, types) => {
  const browserJsLines = [];
  const indexJsLines = [];
  const indexDtsLines = [];
  browserJsLines.push(`export {\n`);
  indexDtsLines.push(`export {\n`);
  for (const type of types) {
    browserJsLines.push(`  ${type},\n`);
    indexJsLines.push(`export class ${type} {}\n`);
    indexDtsLines.push(`  ${type},\n`);
  }
  browserJsLines.push(`};\n`);
  indexDtsLines.push(`};\n`);

  const dir = resolve(__dirname, "packages", `${key}-api`);
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/browser.js`, browserJsLines.join(""));
  writeFileSync(`${dir}/index.js`, indexJsLines.join(""));
  writeFileSync(`${dir}/index.d.ts`, indexDtsLines.join(""));
};

for (const [key, types] of Object.entries(api)) {
  if (["core", "fetch", "xhr", "storage", "websocket"].includes(key)) {
    generate(key, types);
  }
}
