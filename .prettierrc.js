module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: 'auto',
  quoteProps: 'as-needed',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,json}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
