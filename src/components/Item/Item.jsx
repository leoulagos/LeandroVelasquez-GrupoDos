import { Link } from "react-router-dom"
import './Item.css';


export default function Item({id, name, price, img}){

    return (
        <div className="product-container">
            <img src={img} alt="Imagen Productos" />
            <h3 className="product-name">{name}</h3>
            <h4 className="product-price">${price.toFixed(3)}</h4>
        </div>
    )
}