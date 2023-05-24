# @stayradiated/jsconfig

## How do I use this?

You don't. These are my personal config files and can change at any time.

If you like the idea, fork the repo -- this way you can customise the config to
suit your tastes and aren't going to be surprised if I suddenly decide to bring
back semicolons.

## How do you use this?

This is the typically one of the first commands I run after starting a new JS
project.

```
npx @stayradiated/jsconfig
```

This will modify the nearest `package.json` and add the following scripts:

- `tidy`: lint your code with `xo --fix`
- `test`: test your code with `vitest`
- `build`: build your code with `tsc`

## Implementation

This package relies on `read-pkg-up` and `write-pkg` to do the heavy lifting.
These dependencies are used to modify the nearest `package.json` file:

- several dependencies are injected into the `.devDependencies`, so that you
  can run `xo` and `vitest` locally within your project. The versions of these
  dependencies are set by `jsconfig` and may not be the latest available
  versions.
- several scripts are injected into the `.scripts`, so that you can run `tidy`,
  `test` and `build`
- several config definitions are overwritten, including `.xo`, and `.prettier`.
  It overwrites instead of extending so that old properties can be removed in
  the future.

Typescript doesn't support reading configuration from `package.json` so instead
we have to write to `tsconfig.json`. This file is also overwritten each time,
so any local modifications will be removed.
