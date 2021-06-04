const tsconfig = {
  __comment: 'This file is managed by @stayradiated/jsconfig',
  compilerOptions: {
    outDir: 'dist',
    module: 'ES2020',
    target: 'ES2019', // Node.js 12
    lib: ['ES2019', 'ES2020.String', 'DOM'],
    moduleResolution: 'node',
    allowSyntheticDefaultImports: true, // To provide backwards compatibility, Node.js allows you to import most CommonJS packages with a default import. This flag tells TypeScript that it's okay to use import on CommonJS modules.
    resolveJsonModule: false, // ESM doesn't yet support JSON modules.
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
  },
}

export default tsconfig
