# API service for Scheddio

## Description

This API is a migration of Supabase APIs. (The API documentation can be found on the company Postman collection) 

## Technical Stack

We use the following for the project deployment.

* [PostgreSQL](https://www.postgresql.org/)
* [Node.js](https://nodejs.org/en/)
* [Nest.js](https://nestjs.com/)
* [AWS](https://aws.amazon.com/) - for production
* [Heroku](https://heroku.com/) - for staging
* Github workflows for CI/CD pipeline
* pm2, nginx, etc - more to be decided on DevOps side


## Project setup

```bash
$ git clone git@github.com:Scheddio/scheddio-api.git && cd scheddio-api
$ npm install
```

## Run the project

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Deployment
Not sure at the time of writing probably we can use [Mau](https://www.mau.nestjs.com/)

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, we can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

Conventional commits guideline

- Please follow the commit conventions as much as possible. [Guideline](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)