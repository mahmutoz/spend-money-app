import {useState} from 'react';
import BasketItem from "./BasketItem";
function Basket({resetBasket, basket, products, total}) {
    return (
        <div className="basket">
            { basket.map(item => (
                <BasketItem item={item} product={products.find(product => product.id === item.id)}/>
            ))}
            <div>
                Total: ${total}
            </div>
            <button onClick={resetBasket}>Sepeti Boşalt</button>
        </div>
    );
}

export default Basket;