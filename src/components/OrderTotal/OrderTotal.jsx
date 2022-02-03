import { useSelector } from 'react-redux';

function OrderTotal () {
    const order = useSelector(store => store.lineItemReducer);

    return (
        <>
            {order.reduce((prev, current) => prev + Number(current.price), 0)}
        </>
    )
}

export default OrderTotal;