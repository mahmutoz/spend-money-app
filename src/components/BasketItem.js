import {useState} from 'react';
import {moneyFormat} from "../MoneyFormat";

function BasketItem({item, product}) {
    return (
        <>
            <div className="product-items" key={item.id}>
                <span className="basket-title">
                    {product.title}
                </span>
                <span className="basket-amount">
                    {item.amount}
                </span>
                <span className="basket-price">
                    $ {moneyFormat(product.price * item.amount)}
                </span>
            </div>
        </>
    );
}

export default BasketItem;