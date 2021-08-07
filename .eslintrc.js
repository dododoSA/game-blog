module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
