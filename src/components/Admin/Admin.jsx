import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function Admin() {
    const dispatch = useDispatch();
    const adminList = useSelector(store => store.adminListReducer);

    axios.get('/api/order').then((response) => {
        console.log('Got the orders', response.data);
        dispatch({
            type: 'SET_ADMIN',
            payload: response.data
        });
    }).catch((e) => console.warn(e));

    return (
        <div className='primary-div centered'>
            <h2 className='red' >Recent Orders</h2>
            <table className='nice-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time of Order</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody className="adminTableBody">
                    {adminList.map(order =>
                        <tr>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
