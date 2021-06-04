const config = {
  __comment: 'The following configs are managed by `npx @stayradiated/jsconfig`',
  ava: {
    verbose: true,
  },
  xo: {
    space: true,
    semicolon: false,
    prettier: true,
    rules: {
      'ava/no-ignored-test-files': [
        'error',
        { files: ['**/src/**/*.test.ts'], extensions: ['ts'] },
      ],
      'unicorn/prefer-node-protocol': 'off',
    },
  },
  prettier: {
    arrowParens: 'always',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
  },
}

export default config
