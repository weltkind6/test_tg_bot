import React, {useState} from 'react';
import Button from "../Button/Button";
import './Card.css'

const Card = ({food, onAddProduct, onRemoveProduct}) => {
    const {title, image, id, price} = food
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
        onAddProduct(food)
    }
    const handleDecrement = () => {
        setCount(count - 1)
        onRemoveProduct(food)
    }
    return (
        <div className="card" key={id}>
            <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
               {count}
            </span>
            <div className="image__container">
                <img src={image} alt={title} className="card__img"/>
            </div>
            <h4 className="card__title">
                {title}
                <span className='card__price'>
                    ₽{price}
                </span>
            </h4>
            <div className="btn__container">
                <Button type="add" title="+" onClick={handleIncrement}/>
                {count !== 0 ? <Button title="-" type="remove" onClick={handleDecrement}/> : ""}
            </div>
        </div>
    );
};

export default Card;