"use strict";

const { api } = require("@domapi/data");
const { mkdirSync, writeFileSync } = require("node:fs");
const { resolve } = require("node:path");

const generate = (key, types) => {
  const browserJsLines = [];
  const indexJsLines = [];
  const indexDtsLines = [];
  browserJsLines.push(`export {\n`);
  indexJsLines.push(`"use strict";\n`);
  indexJsLines.push(`exports = {\n`);
  indexDtsLines.push(`export {\n`);
  for (const type of types) {
    browserJsLines.push(`  ${type},\n`);
    indexJsLines.push(`  ${type},\n`);
    indexDtsLines.push(`  ${type},\n`);
  }
  browserJsLines.push(`};\n`);
  indexJsLines.push(`};\n`);
  indexDtsLines.push(`};\n`);

  const dir = resolve(__dirname, "packages", `${key}-api`);
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/browser.js`, browserJsLines.join(""));
  writeFileSync(`${dir}/index.js`, indexJsLines.join(""));
  writeFileSync(`${dir}/index.d.ts`, indexDtsLines.join(""));
  writeFileSync(
    `${dir}/package.json`,
    JSON.stringify(
      {
        name: `@domapi/${key}`,
        version: "0.0.3",
        description: "Modularized DOM API",
        author: "Aliaksandr Radzivanovich",
        license: "MIT",
        repository: {
          type: "git",
          url: "https://github.com/aradzie/domapi.git",
          directory: `packages/${key}-api`,
        },
        types: "./index.d.ts",
        main: "./index.js",
        browser: "./browser.js",
        sideEffects: false,
      },
      null,
      2,
    ) + "\n",
  );
};

for (const [key, types] of Object.entries(api)) {
  generate(key, types);
}
