import fs from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { writePackage } from 'write-pkg'
import { readPackageUp } from 'read-pkg-up'
import { omit } from 'rambda'

import scripts from './scripts.js'
import config from './config.js'
import { getDevDependencies } from './dev-dependencies.js'
import tsconfig from './tsconfig.js'

type PackageJson = {
  _id?: string
  readme?: string
  scripts?: Record<string, string>
  devDependencies?: Record<string, string>
}

const main = async (): Promise<void | Error> => {
  const pkg = await readPackageUp()
  if (!pkg) {
    return new Error('Could not find package.json in path.')
  }

  const projectPath = dirname(pkg.path)

  const packageJson = omit(
    ['_id', 'readme'],
    pkg.packageJson as unknown as PackageJson,
  )

  const packageScripts: Record<string, string> = {
    ...packageJson.scripts,
    ...scripts,
  }

  const packageDevDependencies: Record<string, string> = {
    ...packageJson.devDependencies,
    ...(await getDevDependencies()),
  }

  await writePackage(pkg.path, {
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
