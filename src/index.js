import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './ScrollToTop';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./Store/Reducers";
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import 'babel-polyfill';
const store = createStore(combineReducers(reducers), compose(applyMiddleware(thunk)));
const rootElement = document.getElementById("hospitallcare");

if (rootElement.hasChildNodes()) {
    hydrate( 
	<Provider store = { store } >
        <BrowserRouter >
        <ScrollToTop >
        <App />
        </ScrollToTop>  </BrowserRouter>  </Provider>, rootElement);
    }
    else {
        render( <Provider store = { store } >
                <BrowserRouter >
                <ScrollToTop >
                <App />
                </ScrollToTop>  </BrowserRouter>  </Provider>, rootElement);
            }
            // If you want your app to work offline and load faster, you can change
            // unregister() to register() below. Note this comes with some pitfalls.
            // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();