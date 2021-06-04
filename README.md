# @stayradiated/jsconfig

Config files for building, testing and linting JS projects.

Uses:

- xo
- ava
- typescript
- np

How to use:

```
npm install --save-dev @stayradiated/jsconfig
./node_modules/.bin/update-jsconfig
```

This will inject config into `package.json` and create a `tsconfig.json` file.

It will also add the following scripts:

- `tidy`: lint your code with `xo --fix`
- `test`: test your code with `ava`
- `build`: build your code with `tsc`
- `publish`: publish your code with `np`
- `update-jsconfig`: update local config to match `@stayradiated/jsconfig`

NOTE: any config changes will get overridden when you run `update-jsconfig`
