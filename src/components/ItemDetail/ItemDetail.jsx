import { useState } from "react";
import './ItemDetail.css';

export default function ProductDetail({ product, onClose }) {
    const [cantidad, setcantidad] = useState(1);

    const handleIncrease = () => {
        setcantidad(prevcantidad => prevcantidad + 1);
    };

    const handleDecrease = () => {
        if (cantidad > 1) {
            setcantidad(prevcantidad => prevcantidad - 1);
        }
    };

    const handleAddToCart = () => {
        console.log(`Agregado al carrito: ${product.name} - Cantidad: ${cantidad}`);
        onClose();
    };

    return (
        <div className="product-detail">
            <button className="cerrar-button" onClick={onClose}>X</button>
            <img src={product.img} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="cantidad-selector">
                <label>Cantidad:</label>
                <div className="cantidad-controls">
                    <button onClick={handleDecrease} className="cantidad-button">-</button>
                    <span className="cantidad-display">{cantidad}</span>
                    <button onClick={handleIncrease} className="cantidad-button">+</button>
                </div>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
    );
}
