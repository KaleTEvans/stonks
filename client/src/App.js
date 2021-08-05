import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header'

import Home from './pages/Home';
import News from './pages/News'

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='main'>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/news' component={News} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
