import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {persistor} from './store/index'
import {PersistGate} from 'redux-persist/lib/integration/react';
import './index.css';
import 'babel-polyfill'
import store from './store/index'
import * as serviceWorker from './serviceWorker';
import App from "./App";
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
