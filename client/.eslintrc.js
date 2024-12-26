module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended", // Use ESLint's recommended rules as a base
    "plugin:react/recommended", // Recommended rules from eslint-plugin-react
    "plugin:react-hooks/recommended", // Recommended rules for React Hooks
    "plugin:jsx-a11y/recommended", // Recommended accessibility rules
    "plugin:@typescript-eslint/recommended", // Recommended rules for TypeScript
    "prettier", // Turns off formatting rules that conflict with Prettier (must be last)
  ],
  parser: "@typescript-eslint/parser", // Specifies the TypeScript parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows parsing of JSX
    },
    ecmaVersion: "latest", // Use the latest ECMAScript features
    sourceType: "module", // Allows the use of imports
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint"],
  rules: {
    // Customize rules here (if needed)
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/react-in-jsx-scope": "off", // Not necessary with modern React
    "react/function-component-definition": [
      // Allow function components to be defined as arrow functions
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off", // Allow props spreading
    "no-shadow": "off", // Disable base rule to avoid conflict
    "@typescript-eslint/no-shadow": ["error"], // Use TypeScript-specific rule
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".vscode/", ".idea/"], // Ignore these directories
};
