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
    plugins: ['fp'],
    extends: ['plugin:fp/recommended'],
    rules: {
      'ava/assertion-arguments': 'off',
      'ava/no-ignored-test-files': [
        'error',
        { files: ['**/src/**/*.test.ts'], extensions: ['ts'] },
      ],
      'unicorn/prefer-node-protocol': 'off',
      'fp/no-unused-expression': 'off',
      'fp/no-nil': 'off',
      'fp/no-loops': 'off',
      'fp/no-mutation': 'off',
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
