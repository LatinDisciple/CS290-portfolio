import React from 'react';
import ProductQuantity from './ProductQuantity';

function ProductRow({i}) {
    return (
        <tr>
            <td>{i.product}</td>
            <td>{i.company}</td>
            <td>{i.price.toLocaleString('en-US',{style: 'currency', currency: 'USD', currencyDisplay: 'symbol'})}</td>
            <td><ProductQuantity /></td>
        </tr>
    );
}

export default ProductRow;