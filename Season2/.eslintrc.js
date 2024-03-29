module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:prettier/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "sort-keys-fix",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "sort-keys-fix/sort-keys-fix": "warn",
    "semi": ["off"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-console": ["error", { "allow": ["warn"] }],
    "sort-keys": "error",
    "sort-imports": "off",
    "import/order": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error"
  }
}
