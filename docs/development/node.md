### Installing

You can install `Node.js` by using official binaries but recommended way of installation is using `nvm`.

* [MacOS](https://github.com/nvm-sh/nvm#installing-and-updating)
  * using `homebrew` is not recommended
* [Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)
  * Alternative [doc](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows)

Then please run `npm install` on root of project to install all dependencies.

### Version

Please follow the globally available version for `Azure Functions`. It is nodejs12 at this moment.
https://docs.microsoft.com/en-us/azure/azure-functions/functions-versions#languages

Current github action VMs are going to use node14 as default version, so we have to specify the version that we want to use it.

* https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-README.md
* https://github.com/actions/virtual-environments/issues/1953

```yaml
pool:
  vmImage: 'ubuntu-latest'
steps:
  - task: NodeTool@0
    inputs:
      versionSpec: '12.x'
  - script: npm ci # do not use npm install on CI
    displayName: Installing dependencies
```

Example for `azure pipeline`, please use `node12` and install dependencies with `npm ci` instead `npm install`.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Setup Node version
        uses: actions/setup-node@v2
        with:
          node-version: 12
      - name: Fetch dependencies
        run: npm ci
```

Example for `github actions`, please use `node12` and install dependencies with `npm ci` instead `npm install`.



### NPM Scripts

These are the custom CLI scripts for development environment.

* `npm run lint` does link check without any modification
* `npm run lint-fix` check lint errors and tries to fix if possible
* `npm run build` compiles TS files to JS to be executed with Node.js
* `npm start` runs the functions on your local
* `npm test` runs all tests

### Installing dependencies

For the default way of installing dependencies, we highly recommend to use `npm ci` instead of `npm install`.

Difference between `ci` and `install`;

* `install` checks the latest version in the range of given dependency.
* `ci` always removes `node_modules` folder and install exact versions by reading `package-lock.json` file. That helps us to have reproducible builds on local, CI and cloud.

Our CI setup uses `npm ci` for fetching dependencies and building artifact files.

Whenever you install new dependency please use `npm install`. Whenever any other merged PRs had new dependencies, use se `npm ci` to install them.

Our CI Bot will detect outdated dependencies and will try to update them via creating Issue/PR depends on case.
