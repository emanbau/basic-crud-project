import React from 'react';
import './App.scss';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
}
from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL error ${message}`);
      return null;
    });
  }
});

const link = from([
  errorLink, 
  new HttpLink({ uri: "http://localhost:3001/graphql"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Login />
      </div>
    </ApolloProvider>
  );
}

export default App;
