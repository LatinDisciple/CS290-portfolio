import React, { useState } from 'react';
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';

function ProductQuantity() {
    const [q, setQ] = useState(0);

    const inc = () => setQ(q === 10 ? q : q + 1);
    const dec = () => setQ(q === 0 ? 0 : q - 1);

    return (
        <div>
            <AiOutlineDown onClick={dec}/>
            &nbsp;<span>{q}</span>&nbsp;
            <AiOutlineUp onClick={inc}/>
        </div>
    );
}

export default ProductQuantity;