module.exports = {
  printWidth: 120,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      options: {
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: true,
      },
    },
  ],
};
