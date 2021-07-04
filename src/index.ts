import fs from 'fs/promises'
import { dirname, join } from 'path'
import writePkg from 'write-pkg'
import { readPackageUpAsync } from 'read-pkg-up'
import { omit } from 'rambda'

import scripts from './scripts.js'
import config from './config.js'
import { getDevDependencies } from './dev-dependencies.js'
import tsconfig from './tsconfig.js'

type PackageJSON = {
  _id?: string
  readme?: string
  scripts?: Record<string, string>
  devDependencies?: Record<string, string>
}

const main = async (): Promise<void | Error> => {
  const pkg = await readPackageUpAsync()
  if (!pkg) {
    return new Error('Could not find package.json in path.')
  }

  const projectPath = dirname(pkg.path)

  const packageJson = omit(
    ['_id', 'readme'],
    pkg.packageJson as unknown as PackageJSON,
  )

  const packageScripts: Record<string, string> = {
    ...packageJson.scripts,
    ...scripts,
  }

  const packageDevDependencies: Record<string, string> = {
    ...packageJson.devDependencies,
    ...(await getDevDependencies()),
  }

  await writePkg(pkg.path, {
    ...packageJson,
    scripts: packageScripts,
    devDependencies: packageDevDependencies,
    ...config,
  })

  const tsconfigPath = join(projectPath, 'tsconfig.json')
  await fs.writeFile(tsconfigPath, JSON.stringify(tsconfig, null, 2))
}

void main().then((error) => {
  if (error instanceof Error) {
    console.error(error.message)
  } else {
    console.info(
      'Your package.json has been updated. Please run "npm install" to complete the upgrade.',
    )
  }
})
