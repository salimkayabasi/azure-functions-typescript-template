## Using ENV variable

In order to use environment variables with your function while developing in your local, they have to be defined under `local.settings.json`.

To enable everyone to use their own personal env variables for debugging/testing purpose, better to ignore `local.settings.json`.

Before you start the developing, please make a copy of `local.settings.example.json` file and name it as `local.settings.json`.

```bash
cp local.settings.example.json local.settings.json
```

### Adding own ENV variable

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "",
    // Adding new env var
    "ENV_VAR_NAME": "ENV_VAR_VALUE_HERE"
  }
}
```

## Azurite

A lightweight server clone of Azure Storage that simulates most of the commands supported by it with minimal dependencies.

To have `Azurite Blob` and `Azurite Queue` on your local, please create `.azurite` folder under project and run `npm run local-azure` command.

`Azurite` will be installed as `devDependency` with this project but further details can be found [here](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azurite).

```bash
mkdir .azurite
npm run local-azure
```

```
> azurite -l .azurite

Azurite Blob service is starting at http://127.0.0.1:10000
Azurite Blob service is successfully listening at http://127.0.0.1:10000
Azurite Queue service is starting at http://127.0.0.1:10001
Azurite Queue service is successfully listening at http://127.0.0.1:10001
```
