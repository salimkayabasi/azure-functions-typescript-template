# Drawio

diagrams.net (formerly draw.io) is free online diagram software.
You can use it as a flowchart maker, network diagram software, to create UML online, as an ER diagram tool, to design database schema,
to build BPMN online, as a circuit diagram maker, and more. draw.io can import .vsdx, Gliffy™ and Lucidchart™ files

It is a rendering tool and can be found [here](https://app.diagrams.net/)

## Rendering

VSCode has several extensions where you can install and see rendered copy.

Github doesn't support client-side rendering yet, and we need to have PNG files for rendered copies. To automate this, we have a Github Action based
automation [here](.github/workflows/drawio.yml).

## Github Action

Once you added/updated any drawio files, Github Action will be triggered, and it will compile PNG files for us. There will be new PR raised by `github-action` and author
of main PR has to check and merge to main PR.

Each time when you update your PR, `drawio` files will be compiled again and automated PR will be updated. It is better to merge compiled copies after getting approval to main PR.

Examples can be found [here](../examples/)
