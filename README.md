# Simple Chat

This is a simple chat application.

## Setting up the project

The project consists of a server and a client application.

To run the server, follow these steps:

1. `cd` to to the directory of the server application: `cd server/simplechat`.
2. Execute `./gradlew bootRun` to run the server.
3. The server runs on `localhost:8080`
4. Execute `./gradlew clean test` to run the server tests.

To run the client, follow these steps:

1. [Install yarn.](https://yarnpkg.com/en/)
2. `cd` to to the directory of the client application: `cd client/simplechat`.
3. Execute `yarn install` to install the client application.
4. Execute `yarn start` to run the client application.
5. The client runs on `localhost:3000`
6. Execute `yarn test` to run the client tests.

## Caveats

After running the server and the client go to `http://localhost:3000/` on your browser, pick a username and login. There is no check for the uniqueness of the username currently so multiple users with the same username can actually login. The messages are indicated with `You` if the username that the message has been saved with is the same with the logged in username. The data is saved in H2 in memory database so it will dissappear after server has been restarted.

## Todos

Client:

1. For the sake of simplicity applied some global styles. Buttons and inputs should be standalone components encapsulating their own styles.
2. Tests for the reducer.
3. Tets for the connected component Chat.
4. Tests for the action creators.
5. Address the issues at the caveats section.

Server:

1. Integration tests.
2. Unit tests for ChatController.
3. Address the issues at the caveats section.
