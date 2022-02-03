import './SelectPizza.css';
import PizzaDisplay from "./PizzaDisplay";
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function SelectPizza() {
    const pizzas = useSelector(store => store.pizzaReducer);
    const history = useHistory();

    function nextPage() {
        console.log('In nextPage');
        history.push('/customerInfo')
    }

    return (
        <>
            <div className="pizza-list-container">
                {pizzas.map(pizza =>
                    <PizzaDisplay key={pizza.id} pizza={pizza} />)}
            </div>
            <button onClick={nextPage}>Next</button>
        </>
    );
}
export default SelectPizza;
