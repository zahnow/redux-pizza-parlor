import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import SelectPizza from '../SelectPizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';
import OrderTotal from '../OrderTotal/OrderTotal';
import Admin from '../Admin/Admin';
import logo from './clipart226713.png';

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
      <Router>
      <div className='main'>
      <header className='App-header'>
        <a href="/"><img id="logo" src={logo} /></a>
        
        <p>🛒 $<OrderTotal /></p>
      </header>
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
          <Admin />
        </Route>
      </div>
      </Router>
    </div>
  );
}

export default App;
