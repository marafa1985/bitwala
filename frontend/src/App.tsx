import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import BlockList from './Views/BlockList';
import './App.scss';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache
});
const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <BlockList />
      </div>
    </ApolloProvider>

  );
}

export default App;
