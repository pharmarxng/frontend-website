// https://prettier.io/docs/en/options.html

module.exports = {
    bracketSpacing: true,
    bracketSameLine: false,
    singleQuote: true,
    trailingComma: 'all',
    arrowParens: 'avoid',
    importOrder: [
      '^react/(.*)$',
      '^hooks',
      'lodash',
      '@iconify',
      '^atoms/(.*)$',
      '^components/(.*)$',
      '^views/(.*)$',
      '^store/(.*)$',
      '^assets/(.*)$',
      '^axios/(.*)$',
      '^api/(.*)$',
      '^context/(.*)$',
      '^components/(.*)$',
      '^config/(.*)$',
      '^pages/(.*)$',
      '^routes/(.*)$',
      '^utils/(.*)$',
      '^[./].*(?<!\\.(c|le|sc)ss)$',
      '\\.(c|le|sc)ss$',
      '^[./]',
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
  };
  