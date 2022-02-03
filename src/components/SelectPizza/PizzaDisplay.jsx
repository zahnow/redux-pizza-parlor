import './PizzaDisplay.css';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function PizzaDisplay({ pizza }) {
    const dispatch = useDispatch();
    console.log('In pizzadisplay');

    function addPizza() {
        console.log('In add pizza');
        dispatch ({
            type: 'ADD_LINE_ITEM',
            payload: {pizza}
        });
    }

    function removePizza() {
        console.log('In remove pizza');
        dispatch ({
            type: 'REMOVE_LINE_ITEM',
            payload: {pizza}
        });
    }

    const [clicked, setClicked] = useState(false);

    function toggleButtons () {
        if (clicked === true){
            setClicked(false);
        }else{
            setClicked(true);
        }
    }

    return (
        <div className="pizza-container">
            <div className="img-container">
                {<img src={pizza.image_path} />}
            </div>
            <div className="blur">
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </div>
            <div className="button-container" onClick={toggleButtons}>
                {!clicked && <button onClick={addPizza}>Add</button>}
                {clicked && <button onClick={removePizza}>Remove</button>}
                {/* TODO: Conditionally render a subtract button when we get the add function working */}
            </div>  
        </div>
    )
}

export default PizzaDisplay;