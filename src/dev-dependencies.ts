import fs from 'fs/promises'

const { pathname: packageJsonPath } = new URL(
  '../package.json',
  import.meta.url,
)
const packageNames = ['ava', 'del-cli', 'typescript', 'xo']

type PackageJson = {
  devDependencies: Record<string, string>
}

const getDevDependencies = async () => {
  const packageJsonBuffer = await fs.readFile(packageJsonPath)
  const packageJson = JSON.parse(packageJsonBuffer.toString()) as PackageJson

  const devDependencies: Record<string, string> = {}
  for (const packageName of packageNames) {
    const definedVersion = packageJson.devDependencies[packageName]

    if (definedVersion) {
      devDependencies[packageName] = definedVersion
    } else {
      console.error(`Could not add "${packageName}" to devDependencies.`)
    }
  }

  return devDependencies
}

export { getDevDependencies }
