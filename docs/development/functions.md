### Azure Functions

Current folder setup requires all the `Azure Functions` have to be defined under `src/functions`. Each folder is going to be exported as `Azure Function`. Each folder should consist `index.ts` file as
entry point of function execution

```
// editorconfig-checker-disable

src
 | - functions
 | | - host.json
 | | - myFirstFunction
 | | | - function.json
 | | | - index.ts
 | | - mySecondFunction
 | | | - index.js
 | | | - function.json
 | - sharedCode
 | | - myFirstHelperFunction.js
 | | - mySecondHelperFunction.js
 | - node_modules
 | - package.json
 | - package-lock.json

// editorconfig-checker-enable
```
