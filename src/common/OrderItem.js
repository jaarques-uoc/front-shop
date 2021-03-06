import React from 'react';
import {Link} from "react-router-dom";


const OrderItem = ({orderItem, onChange, disabled, readOnly}) => {
    const totalItemPrice = (orderItem.productDto.price * orderItem.quantity).toFixed(2);

    return (
        <tr className="text-center cart-item">
            <td><Link to={`/products/${orderItem.productDto.id}`}><img src={orderItem.productDto.imageUrl}/></Link></td>
            <td className="align-middle">{orderItem.productDto.name}</td>
            <td className="align-middle text-right">{orderItem.productDto.price} €</td>
            <td className="align-middle">
                {readOnly ? orderItem.quantity :
                    <QuantityDropdown quantity={orderItem.quantity}
                                      onChange={onChange}
                                      disabled={disabled}/>
                }
            </td>
            <td className="align-middle text-right">{totalItemPrice} €</td>
        </tr>
    );
};

const QuantityDropdown = ({quantity, onChange, disabled}) =>
    <select onChange={onChange} disabled={disabled} value={quantity}>
        {[...Array(11).keys()]
            .map(x => <option value={x} key={x}>{x}</option>)}
    </select>;

export {OrderItem};