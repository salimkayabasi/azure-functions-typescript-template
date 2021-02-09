## Suggested VSCode Settings

`.vscode/extensions.json`

```json
{
  "recommendations": [
    "ms-azuretools.vscode-azurefunctions"
  ]
}
```

`.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to Node Functions",
      "type": "node",
      "request": "attach",
      "port": 9229,
      "preLaunchTask": "func: host start --javascript --prefix dist"
    }
  ]
}
```

`.vscode/settings.json`

```json
{
  "azureFunctions.deploySubpath": ".",
  "azureFunctions.postDeployTask": "npm install",
  "azureFunctions.projectLanguage": "TypeScript",
  "azureFunctions.projectRuntime": "~3",
  "debug.internalConsoleOptions": "neverOpen",
  "azureFunctions.preDeployTask": "npm prune",
  "azureFunctions.projectSubpath": "src/functions"
}
```

`.vscode/tasks.json`

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "func",
      "command": "host start --javascript --prefix dist",
      "problemMatcher": "$func-node-watch",
      "isBackground": true,
      "dependsOn": "npm build"
    },
    {
      "type": "shell",
      "label": "npm build",
      "command": "npm run build -- --mode=development",
      "problemMatcher": "$tsc"
    },
    {
      "type": "shell",
      "label": "npm install",
      "command": "npm install"
    },
    {
      "type": "shell",
      "label": "npm prune",
      "command": "npm prune --production",
      "dependsOn": "npm build",
      "problemMatcher": []
    }
  ]
}
```
