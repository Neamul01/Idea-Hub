const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --format codeframe --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "**/*.{js,jsx,ts,tsx}": [
    buildEslintCommand,
    (filenames) => `prettier --write ${filenames.join(" ")}`,
  ],
  "**/*.{json,md,yml}": ["prettier --write"],
};
