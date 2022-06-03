# covid-daily-cases

> This is a challenge by coodesh.

REST API to show daily covid cases seperated by country and variant.
The database is fed by an external CSV file.

Technologies used:

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [Node.js](https://nodejs.org/)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

How to run:

```sh
Clone the repository:

$ git clone https://github.com/daviirodrig/covid-daily-cases.git
$ cd covid-daily-cases

Install dependencies:

$ npm install

Build the application:

$ npm run build

Make .env from .env-example:

$ cp .env-example .env

Start the containers with Docker Compose:

$ docker-compose up -d --build

Run the populateDB script:

$ node "dist/scripts/populateDB"

or from inside the container:

$ docker exec -it covid-daily-cases-api-1 bash -c "node dist/scripts/populateDB"

```
