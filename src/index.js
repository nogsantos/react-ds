import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo'

import { createStore } from 'redux';
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error';

import reducer from './reducers';
import './style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {AppConf} from './utils/constants';
/**
 * Apollo conf
 */

 const httpLink = new HttpLink({
    uri: AppConf.apiEndPoint,
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_DS_TOKEN}`,
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors){
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const link = ApolloLink.from([
    errorLink,
    httpLink,
]);

const cache = new InMemoryCache({
    logger: console.log,
    loggerEnabled: true,
});

const client = new ApolloClient({
    link,
    cache,
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
