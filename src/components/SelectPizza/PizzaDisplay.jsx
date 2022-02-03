import './PizzaDisplay.css';
import {useDispatch} from 'react-redux';

function PizzaDisplay({ pizza }) {
    const dispatch = useDispatch();
    console.log('In pizzadisplay');

    function addPizza() {
        console.log('In add pizza');
        dispatch ({
            type: 'ADD_LINE_ITEM',
            payload: {pizza}
        });
        return;
    }

    function removePizza() {
        console.log('In remove pizza');
        dispatch ({
            type: 'REMOVE_LINE_ITEM',
            payload: {pizza}

        });
    }

    return (
        <div className="pizza-container">
            <div className="img-container">
                <img src={pizza.img_path}></img>
            </div>
            <div className="description-container">
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                <p>Here's some text in case I got the object wrong</p>
            </div>
            <div className="button-container">
                <button onClick={addPizza}>Add</button>
                <button onClick={removePizza}>Remove</button>
                {/* TODO: Conditionally render a subtract button when we get the add function working */}
            </div>
            
        </div>
    )
}

export default PizzaDisplay;