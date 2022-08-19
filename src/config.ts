const config = {
  __comment:
    'The following configs are managed by `npx @stayradiated/jsconfig`',
  ava: {
    verbose: true,
  },
  xo: {
    space: true,
    semicolon: false,
    prettier: true,
    rules: {
      'ava/assertion-arguments': 'off',
      'ava/no-ignored-test-files': [
        'error',
        { files: ['**/src/**/*.test.ts'], extensions: ['ts'] },
      ],
    },
  },
  prettier: {
    arrowParens: 'always',
    bracketSpacing: true,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
  },
}

export default config
