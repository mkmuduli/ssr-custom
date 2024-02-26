import 'babel-polyfill';

import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from './App';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api'
  });

const store = createStore(reducer,window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance)))
hydrate(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root"))