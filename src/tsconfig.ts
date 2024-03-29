// Forked from sindresorhus/tsconfig
// https://github.com/sindresorhus/tsconfig/blob/main/tsconfig.json
const tsconfig = {
  __comment: 'This typescipt config is managed by `@stayradiated/jsconfig`',
  compilerOptions: {
    outDir: 'dist',
    module: 'node16',
    moduleResolution: 'node16',
    moduleDetection: 'force',
    target: 'ES2022',
    lib: ['ES2022', 'DOM', 'DOM.Iterable'],
    allowSyntheticDefaultImports: true,
    resolveJsonModule: false,
    jsx: 'react',
    declaration: true,
    pretty: true,
    newLine: 'lf',
    stripInternal: true,
    strict: true,
    noImplicitReturns: true,
    noImplicitOverride: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noFallthroughCasesInSwitch: true,
    noUncheckedIndexedAccess: true,
    noPropertyAccessFromIndexSignature: true,
    noEmitOnError: false,
    useDefineForClassFields: true,
    forceConsistentCasingInFileNames: true,
    skipLibCheck: true,
    rootDir: "src",
    baseUrl: ".",
    paths: {
      "#src/*": ["src/*"]
    }
  },
}

export default tsconfig
