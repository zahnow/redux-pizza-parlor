import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SelectPizza from '../SelectPizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';
import OrderTotal from '../OrderTotal/OrderTotal';


function App() {
  const dispatch = useDispatch();
  const pizzas = useSelector(store => store.pizzaReducer);

  function fetchPizzas() {
    axios.get('/api/pizza')
      .then((response) => {
        console.log('Got pizzas: ', response.data);
        dispatch({
          type: 'REPLACE_PIZZAS',
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('Error getting pizzas:', error);
      })
  }

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <div className='App'>
      <div className='main'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <p>🛒 $<OrderTotal /></p>
      </header>
      <Router>
	      <Route path="/" exact>
          <SelectPizza />
	      </Route>
        <Route path="/customerInfo">
          <CustomerInfo />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/admin">

        </Route>
      </Router>
      </div>
    </div>
  );
}

export default App;
