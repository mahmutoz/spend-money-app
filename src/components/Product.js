import {useState} from "react";
import {moneyFormat} from '../MoneyFormat'

function Product({product, basket, setBasket, total, money}) {
    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);
        if(checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket]);
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }
    return (
        <>
            <div className="product">
                <img src={product.image} />
                <div className="title">{product.title}</div>
                <div className="price">$ {moneyFormat(product.price)}</div>
                <div className="actions">
                    <button className="sell" disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    {/* eslint-disable-next-line no-mixed-operators */}
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button className="buy" disabled={product.price + total > money} onClick={addBasket}>Al</button>
                </div>
            </div>
        </>
    );
}

export default Product;