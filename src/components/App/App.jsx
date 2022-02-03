import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SelectPizza from '../SelectPizza/SelectPizza';



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
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <SelectPizza />
    </div>
  );
}

export default App;
