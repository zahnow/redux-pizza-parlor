function CheckoutTableRow({lineItem}) {

    return (
        <tr><td>{lineItem.name}</td><td>{lineItem.price}</td></tr>
    );
}

export default CheckoutTableRow