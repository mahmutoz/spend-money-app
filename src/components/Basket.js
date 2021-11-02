import {useState} from 'react';
import BasketItem from "./BasketItem";
import {moneyFormat} from '../MoneyFormat'

function Basket({resetBasket, basket, products, total}) {
    return (
        <div className="basket">
            <div className="product-items product-title">
                <span>Product Name</span>
                <span>Pieces</span>
                <span>Total Price</span>
            </div>
            { basket.map(item => (
                <BasketItem key={item.id} item={item} product={products.find(product => product.id === item.id)}/>
            ))}
            <div className="total">
                ${moneyFormat(total)}
            </div>
            <div className="btn-reset">
                <button onClick={resetBasket}>Empty Cart</button>
            </div>
        </div>
    );
}

export default Basket;