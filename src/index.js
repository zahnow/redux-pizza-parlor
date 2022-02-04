import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import {logger} from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    if (action.type === 'REPLACE_PIZZAS') {
      return action.payload;
    } 
    return state;
  }

const lineItemReducer = (state = [], action) => {
    if (action.type === 'ADD_LINE_ITEM') {
        const pizza = action.payload.pizza;
        console.log('Pizza id:', pizza.id);
        return [...state, {
            id: pizza.id,
            quantity: 1,
            price: pizza.price,
            name: pizza.name}];
    } else if (action.type === 'REMOVE_LINE_ITEM') {
        const pizza = action.payload.pizza;
        console.log('Removing line item');
        console.log('pizza id:', pizza.id);
        return state.filter((lineItem) => {
            return lineItem.id !== pizza.id;
        });
    } else if (action.type === 'RESET_LINE_ITEMS') {
        return state = [];
    }
    return state;
}

const customerInputReducer = (state= {}, action) => {
    if (action.type === 'SET_CUSTOMER') {
        console.log('Payload for SET_CUSTOMER:', action.payload);
        return action.payload;
    }
    return state;
}

const adminListReducer = (state=[], action) => {
    if (action.type === 'SET_ADMIN') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
      pizzaReducer,
      lineItemReducer,
      customerInputReducer,
      adminListReducer
    }),
    applyMiddleware(logger));

ReactDOM.render(
    <Provider store={storeInstance}>
        <App /> 
    </Provider>,
    document.getElementById('root'));
