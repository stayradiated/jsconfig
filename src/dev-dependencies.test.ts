import { test, expect } from 'vitest'
import { getDevDependencies } from './dev-dependencies.js'

test('getDevDependencies', async () => {
  const devDependencies = await getDevDependencies()

  expect(Object.keys(devDependencies)).toEqual(['vitest', 'typescript', 'xo'])
})
