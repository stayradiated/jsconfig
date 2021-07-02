import fs from 'fs/promises'

const { pathname: packageJSONPath } = new URL(
  '../package.json',
  import.meta.url,
)
const packageNames = ['ava', 'del-cli', 'typescript', 'xo']

type PackageJSON = {
  devDependencies: Record<string, string>
}

const getDevDependencies = async () => {
  const packageJSON = JSON.parse(
    await fs.readFile(packageJSONPath, 'utf8'),
  ) as PackageJSON

  const devDependencies: Record<string, string> = {}
  for (const packageName of packageNames) {
    const definedVersion = packageJSON.devDependencies[packageName]

    if (definedVersion) {
      devDependencies[packageName] = definedVersion
    } else {
      console.error(`Could not add "${packageName}" to devDependencies.`)
    }
  }

  return devDependencies
}

export { getDevDependencies }
