# Development

## Setup Docker

Install Docker:
* For OSX: https://docs.docker.com/docker-for-mac/install/
* For Windows: https://docs.docker.com/docker-for-windows/install/

## Start the DB

Run `docker-compose up db`. When you see the line `LOG:  database system is ready to accept connections`,
the databse is ready for connections.

If you need to connect the database from your host, use `localhost:5432`. The credentials are stored in `.env`.

## Stopping the DB

`Ctrl+C` should stop it.

## Restarting the DB

If there is something wrong (eg: the database doesn't start), you can reset it with `docker-compose down`.

If this doesn't solve the issue, you can try a hard reset: `docker-compose down --rmi all -v`. Warning: this will
delete any local data, you'll start with an empty database.