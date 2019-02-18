# Development

## Code style

This project uses [prettier](https://prettier.io/) and [eslint](https://eslint.org/) (with [airbnb-base](https://github.com/airbnb/javascript) config) to define the code style.

It is recommended to install Prettier in your editor for a better dev experience:
    * VS Code: https://github.com/prettier/prettier-vscode and https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
    * Webstorm: https://prettier.io/docs/en/webstorm.html  and https://plugins.jetbrains.com/plugin/7494-eslint

## Setup Docker

Install Docker:
* For OSX: https://docs.docker.com/docker-for-mac/install/
* For Windows: https://docs.docker.com/docker-for-windows/install/

## Start the services

Run `docker-compose up api`. When you see the line `server running`, the service is ready to accept connections
in `http://localhost:8080`. This command will also start the databse. If you need to connect the database from
your host, use `localhost:15432`, using the credentials are stored in `.env`.

If you already have PostgreSQL server running in your host, you can pass the env variable `DB_HOST_PORT`
to change the port. For example, start with `DB_HOST_PORT=25432-compose up api` and connect to
`localhost:25432` instead.

The `api` service will restart automatically every time you change a file in `./server`.

To install a new dependency (or update an existint one), you have to install it normally (e.g. `npm install my-dep`)
and start the service with `docker-compose up --build api`.

## Stopping the services

`Ctrl+C` should stop them. It for whatever reason this doesn't work, run `docker-compose down` in another terminal.

## Restarting the services

If there is something wrong (eg: the database doesn't start), you can reset all services with `docker-compose down`
and try to start them again.

If this doesn't solve the issue, you can try a hard reset: `docker-compose down --rmi all -v`. Warning: this will
delete any local data, you'll start with an empty database.