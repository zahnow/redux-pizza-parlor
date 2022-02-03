import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';



function App() {
  const dispatch = useDispatch();
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
  
      <img src='images/pizza_photo.png' />

      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
