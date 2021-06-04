import fs from 'fs/promises'
import { dirname, join } from 'path'
import writePkg from 'write-pkg'
import { readPackageUpAsync } from 'read-pkg-up'

import scripts from './scripts.js'
import config from './config.js'
import devDependencies from './dev-dependencies.js'
import tsconfig from './tsconfig.js'

type PackageJSON = {
  [key: string]: any
  _id?: string
  readme?: string
  scripts?: Record<string, string>
  devDependencies?: Record<string, string>
}

void (async function () {
  const pkg = await readPackageUpAsync()
  if (!pkg) {
    throw new Error('Could not find package.json in path.')
  }

  const projectPath = dirname(pkg.path)

  const packageJson = pkg.packageJson as unknown as PackageJSON
  delete packageJson._id
  delete packageJson.readme

  const packageScripts: Record<string, string> = {
    ...packageJson.scripts,
    ...scripts,
  }

  const packageDevDependencies: Record<string, string> = {
    ...packageJson.devDependencies,
    ...devDependencies,
  }

  await writePkg(pkg.path, {
    ...packageJson,
    scripts: packageScripts,
    devDependencies: packageDevDependencies,
    ...config,
  })

  const tsconfigPath = join(projectPath, 'tsconfig.json')
  await fs.writeFile(tsconfigPath, JSON.stringify(tsconfig, null, 2))
})()
