import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import configureAppStore from './store/store';

const rootElement = document.getElementById('root');
const store = configureAppStore(window.PRELOADED_STATE);
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    rootElement
);

