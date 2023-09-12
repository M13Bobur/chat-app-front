module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },

  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "react/prop-types": 0,
    indent: 0,
    "linebreak-style": 0,
    "import/no-unresolved": 0,
    "react/display-name": 0,
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/anchor-is-valid": 0,
    quotes: 0,
  },
};
