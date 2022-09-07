"use strict";

const { api } = require("@domapi/data");
const { mkdirSync, writeFileSync } = require("node:fs");
const { resolve } = require("node:path");

const generate = (key, types) => {
  const browserJsLines = [];
  const indexJsLines = [];
  const indexDTsLines = [];
  browserJsLines.push(`export {\n`);
  indexDTsLines.push(`export {\n`);
  for (const type of types) {
    browserJsLines.push(`  ${type},\n`);
    indexJsLines.push(`export class ${type} {}\n`);
    indexDTsLines.push(`  ${type},\n`);
  }
  browserJsLines.push(`};\n`);
  indexDTsLines.push(`};\n`);

  const dir = resolve(__dirname, "..", `${key}-api`);
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/browser.js`, browserJsLines.join(""));
  writeFileSync(`${dir}/index.js`, indexJsLines.join(""));
  writeFileSync(`${dir}/index.d.ts`, indexDTsLines.join(""));
};

for (const [key, types] of Object.entries(api)) {
  if (["core", "html", "css", "svg"].includes(key)) {
    generate(key, types);
  }
}
