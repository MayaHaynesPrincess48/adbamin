module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "dist/",
    "server/src/server.ts",
    ".eslintrc.cjs",
    "node_modules/",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
