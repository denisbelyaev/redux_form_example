import React, {Component} from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducers';
import promise from './middlewares/promise';
import MailingForm from './components/MailingForm';
import { apiMiddleware } from 'redux-api-middleware';

const createStoreWithMiddleware = compose(
    applyMiddleware(
        apiMiddleware
    )
)(createStore);

let store = createStoreWithMiddleware(reducer);
//let store = createStore(reducer, {}, applyMiddleware(fetch));

let App = () => (
    <div>
        <MailingForm />
    </div>
);

App = connect()(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
