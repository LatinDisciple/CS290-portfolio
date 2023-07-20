import React from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({products}) {
    return (
        <div>
        <h2>Order Here</h2>
        <article>
            <p>
                Enter your name, email, and mailing address, then select one of our products below.
            </p>
            <table>
                <caption>Products for sale</caption>
                <thead>
                    <tr>
                        <th>Item </th>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Choose Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((currProd, i) =>
                        <ProductRow i={currProd} key={i} />
                    )}
                </tbody>
            </table>
            <tfoot>
            
            </tfoot>      
        </article>
        </div>
    );
}

export default OrderPage;