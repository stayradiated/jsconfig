const tsconfig = {
  __comment: 'This typescipt config is managed by `npx @stayradiated/jsconfig`',
  compilerOptions: {
    outDir: 'dist',
    module: 'node16',
    moduleResolution: 'node16',
    moduleDetection: 'force',
    target: 'ES2020', // Node.js 14
    lib: ['ES2020', 'DOM'],
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
