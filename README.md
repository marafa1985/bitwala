This Task was provided by BitWala, bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [NodeJS](https://nodejs.org/en/).

<h1><strong>Starting With Backend</strong></h1>

## Backend Stack:

Typescript, NodeJS,and Apollo / GraphQL.

The backend project works as a proxy between the API component and the frontend Project.

The backend didn't use Mutation since both of API requests were getting data, so there is no need to use mutation in the project.

### Apollo / GraphQL
- Caching: the project implements the [apollo-cache-control](https://www.apollographql.com/docs/apollo-server/performance/caching/);

### Run Backend Project 
using the following command:
`npm start`

the application will be running in the [http://localhost:4000](http://localhost:4000)



<h1><strong>Frontend Application</strong></h1>

## Frontend Stack:
React, Apollo Client, [apollo-cache-inmemory](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-cache-inmemory), react-test-renderer, Jest

### Grid Component

The project based on grid component which provide all required functionality for the project:

- /HeaderList Component: function component responsible for rendering the the column List that passed to it, it also contains a option for show/hide row details.

- /ItemList Component: Render the passed data from backend as table row.

- /ItemDetails Component: Render row Details for the selected row.

- /Paging: to control the data pages over the grid.

- /Loading: Spinner waiting the data to be loaded.

### Grid Sorting

The Grid has a sorting functionality per column


### Testing

Since the grid is the main component in the project so we made som tests for each parts like header, and grid itself, you can find different using of test library like "Create, render, snapshot compersion".

```
$ npm run test
```

###  [apollo-cache-inmemory](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-cache-inmemory)


## Deployment: Ubuntu

### Install Docker to Ubuntu

Please follow this Link to Install Docker in Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/

Once you installed Docker to the ubuntu you can start copy the source code to machine as the following

### Copy Surce Code
before you clone the package make sure that you installed git in ubuntu.

- Using github: 
```

git clone https://github.com/BitwalaCareers/Mahmoud-Arafa-Coding-Challenge.git
```
- Copy the code over storage like USB. (not recommended)

### Deploy 
After the souce code Avaliable on the server you can ru the following command:

- Build Docker image to the ubuntu Machine

```
$ docker build -t bitwala .
```
- Run Docker image for production, specify port 80  as a default

```
$ docker run -it -p 80:80 bitwala
```

Else for test you can specify port 3030 as the following:

```
$ docker run -it -p 3000:80 bitwala
```
Wait untill finished.

- Now you can open browser and goto url:

[http://localhost:3000/](http://localhost:3000/)


## e2e

For e2e Testing you can install [cypress.io](https://www.cypress.io/).

How to use cypress it [https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)



### Ambiguity

The frontend design since it very important while creating your component.

## Available Scripts

In the project directory, you can run:

## `npm start`

## `npm test`

## `npm run build`

## `npm run eject`
