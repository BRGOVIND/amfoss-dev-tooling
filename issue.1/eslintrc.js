module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["simple-import-sort", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "error",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    eqeqeq: ["error", "always"],
    "no-var": "error",
    "prefer-const": "warn",
  },
};
