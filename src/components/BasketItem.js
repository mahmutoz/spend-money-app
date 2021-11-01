import {useState} from 'react';

function BasketItem({item, product}) {
    return (
        <>
            <div className="product-items" key={item.id}>
                <span>
                    {product.title}
                </span>
                <span>
                    {product.price * item.amount}
                </span>
                <span>
                    {item.amount}
                </span>
            </div>
        </>
    );
}

export default BasketItem;