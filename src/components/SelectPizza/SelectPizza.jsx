import './SelectPizza.css';
import PizzaDisplay from "./PizzaDisplay";
import { useSelector } from 'react-redux';

function SelectPizza() {
    const pizzas = useSelector(store => store.pizzaReducer);


    return (
        <>
            <div className="pizza-list-container">
                {pizzas.map(pizza =>
                    <PizzaDisplay key={pizza.id} pizza={pizza} />)}
            </div>
            <button>Next</button>
        </>
    );
}
export default SelectPizza;
