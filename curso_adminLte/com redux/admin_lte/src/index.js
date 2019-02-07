import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reducers from './main/reducers'
import promise from 'redux-promise'

import multi from 'redux-multi'
import thunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker';

//tudo o que iremos trabalhar de dados vai estar dentro desse objeto store
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

ReactDOM.render(
    // com isso consegue fazer toda a aplicação receber os compoapplyMiddlewarenentes. 
    <Provider  store={store}>
       <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
