import mix from '../images/mix.jpeg'
import apples from '../images/apples.jpeg'
import strawberry from '../images/strawberry.jpeg'
import raspberry from '../images/raspberry.jpeg'
import orangeLemon from '../images/orange-lemon.jpeg'
import oranges from '../images/oranges.jpeg'
import kiwi from '../images/kiwi.jpeg'


export function getData() {
    return [
        {id: Date.now(), title: 'Овоще-фрукто микс', price: 17.99, image: mix},
        {id: Date.now(), title: 'Яблоки', price: 17.99, image: apples},
        {id: Date.now(), title: 'Малина', price: 17.99, image: raspberry},
        {id: Date.now(), title: 'Клубника', price: 17.99, image: strawberry},
        {id: Date.now(), title: 'Лимоно-апельсины', price: 17.99, image: orangeLemon},
        {id: Date.now(), title: 'Апельсины', price: 17.99, image: oranges},
        {id: Date.now(), title: 'Киви', price: 17.99, image: kiwi},
    ]
}