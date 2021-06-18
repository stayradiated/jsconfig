const scripts = {
  tidy: 'xo --fix',
  test: 'ava',
  build: 'del-cli dist && tsc',
}

export default scripts
