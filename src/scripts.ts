const scripts = {
  'update-jsconfig': 'update-jsconfig',
  tidy: 'xo --fix',
  test: 'ava',
  build: 'del-cli dist && tsc',
  publish: 'np',
}

export default scripts
