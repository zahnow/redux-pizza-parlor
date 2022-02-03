import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
    if (action.type === 'REPLACE_PIZZAS') {
      return action.payload;
    } 
    return state;
  }

const orderReducer = (state = {}, action) => {
    return state;
}

const storeInstance = createStore(
    combineReducers({
      pizzaReducer,
      orderReducer
    }));

ReactDOM.render(
    <Provider store={storeInstance}>
        <App /> 
    </Provider>,
    document.getElementById('root'));
