const scripts = {
  tidy: 'xo --fix',
  test: 'vitest --watch=false',
  build: 'rm -rf ./dist && tsc',
}

export default scripts
