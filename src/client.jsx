import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import configureAppStore from './store/store';

const rootElement = document.getElementById('root');
const store = configureAppStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    rootElement
);

