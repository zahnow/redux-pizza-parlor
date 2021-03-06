import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import OrderTotal from '../OrderTotal/OrderTotal';
import CheckoutTableRow from './CheckoutTableRow';
import axios from 'axios';

function Checkout () {
    const lineItems = useSelector(store => store.lineItemReducer);
    const customer = useSelector(store => store.customerInputReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    const orderTotal = lineItems.reduce((prev, current) => prev + Number(current.price), 0)

    function checkout () {
        console.log('Checking out');
        //TODO: Make this work
        axios.post('/api/order', {
            customer_name: customer.name,
            street_address: customer.street_address,
            city: customer.city,
            zip: customer.zip,
            /* PLACEHOLDER, CHANGE LATER WHEN CARRYOUT WORKS */
            type: customer.type,
            total: orderTotal,
            pizzas: lineItems 
        }).then((response) => {
            dispatch({type: 'RESET_LINE_ITEMS'});
            let audio = new Audio("./sounds/pizza.mp3");
            audio.play()
            history.push('/');
        }).catch((error) => {
            console.warn(error);
        })
    }

    return (
        <div className='primary-div blur'>
            <h2>Confirm Your Order</h2>
            <div>
            <p>{customer.name}</p>
            <p>{customer.street_address}</p>
            <p>{customer.city} {customer.zip}</p>
            </div>
            <table className='nice-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {lineItems.map(lineItem => <CheckoutTableRow key={lineItem.id} lineItem={lineItem} />)}
                </tbody>
            </table>
            <h2>Order Total: $<OrderTotal /></h2>
            <button onClick={checkout}>Submit</button>
        </div>
    )
}

export default Checkout;