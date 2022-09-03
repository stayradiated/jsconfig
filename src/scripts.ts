const scripts = {
  tidy: 'xo --fix',
  test: 'ava',
  build: 'rm -rf ./dist && tsc',
}

export default scripts
