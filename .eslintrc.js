module.exports = {
  root: true,
  extends: ['airbnb-typescript', 'airbnb/hooks', 'next', 'next/core-web-vitals', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',

    // Linkの子要素のaタグにはhrefはいらない アップデート次第でこれは解消されるかもしれない
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
