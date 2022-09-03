import test from 'ava'

import { getDevDependencies } from './dev-dependencies.js'

test('getDevDependencies', async (t) => {
  const devDependencies = await getDevDependencies()

  t.deepEqual(Object.keys(devDependencies), ['ava', 'typescript', 'xo'])
})
