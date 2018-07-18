"use strict";

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    mocha: true
  },
  extends: ["plugin:eslint-plugin/recommended"],
  plugins: ["eslint-plugin"]
};
