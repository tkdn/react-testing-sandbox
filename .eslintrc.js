/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        printWidth: 120,
        semi: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false
      }
    ]
  }
}
