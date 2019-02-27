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

Note: this document assumes OSX. If you are using Windows, you have run `docker-machine ip` to get the IP
and use that value instead of `localhost` (eg: `http://1.2.3.4:8080`)

## Start the services

The first time you clone this repo, you have to build the services with `docker-compose build`. It is also recommended
to do run the same command when you switch branches or update master to make sure the services are running with the
latest dependencies.

Run `docker-compose up api`. When you see the line `server running`, the service is ready to accept connections
in `http://localhost:8080`.  The service will restart automatically every time you change a file in `./server`.

To install a new dependency (or update an existint one), you have to install it normally (e.g. `npm install my-dep`), then
build the service (`docker-compose build`) and start it (`docker-compose up api`).

ProTip: `docker-compose up --build api` is a shortcut for running `docker-compose build` + `docker-compose up api`.

## Stopping the services

`Ctrl+C` should stop them. It for whatever reason this doesn't work, run `docker-compose down` in another terminal.

## Restarting the services

If there is something wrong (eg: the database doesn't start), you can reset all services with `docker-compose down`
and try to start them again.

If this doesn't solve the issue, you can try a hard reset: `docker-compose down --rmi all -v`. Warning: this will
delete any local data, you'll start with an empty database.

## Database

If you need to connect the database from your host, use `localhost:15432`, using the credentials are stored in `.env`.
If you already have PostgreSQL server running in that port, you can pass the env variable `DB_HOST_PORT` to change
the port. For example, start with `DB_HOST_PORT=25432-compose up api` and connect to `localhost:25432` instead.

You can use [DBeaver](https://dbeaver.io/download/) to connect to the database. Is a multi-platform open-source GUI to
interact with many types of databases, including PostgreSQL.

This service uses [Sequelize migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html) to keep the database
up to date. To run the CLI, run `docker-compose exec api npm run sequelize <command>` after the service is up. Please read
the Sequelize tutorial for more info on how to use this tool. As a cookbook, these are the common operations

### Creating a new table

`docker-compose exec api npm run sequelize -- model:generate --name User --attributes firstName:string,lastName:string`
Then tweak the new migration in `./server/data/migrations` and the new model file in `./server/data/models` to match our
code style and add attributes as needed.

Once a model is generated, we must not change the migration file. If we need to make changes to the database, we have to
generate a new migration (see next command).

### Updating a table a new model

`docker-compose exec api npm run sequelize -- migration:generate --name add_user_email`
Then actually write the migration code in the new file in `./server/data/migrations`.


