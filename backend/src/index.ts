import { ApolloServer } from 'apollo-server';
import { typeDefs } from './GraphQL/Schema/index';
import { resolvers } from './GraphQL/Resolvers/index';

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  cacheControl: true,
})

server.listen().then(() => console.log('Server is running on http://localhost:4000'));
