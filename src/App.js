import './App.css';
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import React, {useEffect, useState} from 'react';

const {getData} = require('./db/db')

const food = getData()

const telegram = window.Telegram.WebApp

function App() {

    useEffect(() => {
        telegram.ready()
    })
    const [cartItems, setCartItems] = useState([])

    const onAddProduct = food => {
        const exist = cartItems.find(x => x.id === food.id)
        if (exist) {
            setCartItems(cartItems.map((x) => x.id === food.id ? {...exist, quantity: exist.quantity + 1} : x))
        } else {
            setCartItems([...cartItems, {...food, quantity: 1}])
        }
    }
    const onRemoveProduct = food => {
        const exist = cartItems.find(x => x.id === food.id)
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter(x => x.id !== food.id))
        } else setCartItems(cartItems.map(x => x.id === food.id ? {...exist, quantity: exist.quantity - 1} : x))
    }
    const onCheckOut = () => {
        telegram.MainButton.text = "Оплатить"
        telegram.MainButton.show()
        telegram.headerColor = "#ff5522"
    }
    return (
        <>
            <h1 className="heading">Закажите свежие овощи и фрукты!</h1>
            <Cart
                cartItems={cartItems}
                onAddProduct={onAddProduct}
                onRemoveProduct={onRemoveProduct}
                onCheckOut={onCheckOut}
            />
            <div className="cards__container">
                {food.map(food =>
                    <Card
                        food={food}
                        onAddProduct={onAddProduct}
                        onRemoveProduct={onRemoveProduct}
                    />)}
            </div>
        </>
    );
}

export default App;
