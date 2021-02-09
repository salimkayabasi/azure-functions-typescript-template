# Template for Azure Functions

With this project setup, you can start implementing your next product without taking care of boiler plate work.

It uses;
* [Typescript](https://www.typescriptlang.org/) as framework to run your TS files with [Node.js](https://nodejs.org/en/)
* As a serverless compute solution, project setup will be suitable for [Azure Functions](https://azure.microsoft.com/en-us/services/functions/)


## How to run it locally

Start with having local copy of local settings. There is already a file as an example.

```shell
cp local.settings.example.json local.settings.json
npm start

open http://localhost:7071/api/helloworld?name=salim
```
and you must see the response as ```HELLO FROM SALIM!```


