import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo'

import { createStore } from 'redux';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'

import reducer from './reducers';
import './style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {AppConf} from './utils/constants';
/**
 * Apollo conf
 */
const httpLink = createHttpLink({
    uri: AppConf.apiEndPoint,
});
const authLink = setContext((_, { headers }) => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTg4MDA1NDAsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqZHB5aHllczE3czMwMTkzNTNlbTZ4NzMiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqZHE2bWxtaDMyc2owMTYzN3lhMzM5cXcifQ.OjIFxPg-wb3O54AO8UY7t1Aw7HTCD5SKyfg7RF1vIqw"
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
/**
 * Reducers
 */
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/**
 * Render
 */
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
