module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    "react/jsx-filename-extension" : 0,
    "react/react-in-jsx-scope" : 0,
    "react/prop-types" : 0,
    "import/prefer-default-export": 0,
  },
};