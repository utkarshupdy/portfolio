import globals from "globals";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "jsx-a11y/anchor-is-valid": "off", // Disable the anchor accessibility warning
      "react/jsx-no-target-blank": [
        "warn", 
        { "allowReferrer": true }
      ] // Modify target="_blank" rule if necessary
    }
  },
  pluginReact.configs.flat.recommended,
];
