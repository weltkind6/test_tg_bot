import React from 'react';
import Button from "../Button/Button";
import './Cart.css'

const Cart = ({cartItems, onCheckOut}) => {
    const totalPrice = cartItems.reduce((acc, value) => acc + value.price * value.quantity, 0)
    return (
        <div className="cart__container">
            {cartItems.length === 0 ? "No items in cart" : ""}
            <br />
            <span className="">Итого: ₽ {totalPrice.toFixed(2)}</span>
            <Button
                title={`${cartItems.length === 0 ? "Заказать!" : "В корзину"}`}
                type="checkout"
                disable={cartItems.length === 0}
                onClick={onCheckOut}
            />
        </div>
    );
};

export default Cart;