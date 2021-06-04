# @stayradiated/jsconfig

## How do I use this?

You don't. These are my personal config files and can change at any time.

If you like the idea, fork the repo -- this way you can customise the config to
suit your tastes and aren't going to be surprised if I suddenly decide to bring
back semicolons.

## How do you use this?

This is the typically the first dependency I install when creating a new JS
project.

```
npx @stayradiated/jsconfig
```

This will modify the nearest `package.json` and add the following scripts:

- `tidy`: lint your code with `xo --fix`
- `test`: test your code with `ava`
- `build`: build your code with `tsc`
- `publish`: publish your code with `np`

## Implementation

This package relies on `read-pkg-up` and `write-pkg` to do the heavy lifting.

Modify `devDependencies` and `scripts`, preserving extra fields.

Overwrite config fields, such as `xo`, `ava` and `prettier`. It overwrites
instead of extending so that old properties can be removed in the future.

Typescript doesn't support reading configuration from `package.json` so we have
to write to `tsconfig.json` instead. This file is also overwritten each time.
