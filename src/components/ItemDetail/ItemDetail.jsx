import { useState } from "react";
import './ItemDetail.css';

export default function ProductDetail({ product, onClose }) {
    const [cantidad, setCantidad] = useState(1);
    const stockDisponible = product.stock;

    const handleIncrease = () => {
        setCantidad(prevCantidad => 
            prevCantidad < stockDisponible ? prevCantidad + 1 : prevCantidad
        );
    };

    const handleDecrease = () => {
        if (cantidad > 1) {
            setCantidad(prevCantidad => prevCantidad - 1);
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
            <p className="product-price">Precio: ${product.price.toFixed(3)}</p>
            <p className="product-stock">Stock disponible: {stockDisponible}</p>
            <div className="cantidad-selector">
                <label>Cantidad:</label>
                <div className="cantidad-controls">
                    <button onClick={handleDecrease} className="cantidad-button">-</button>
                    <span className="cantidad-display">{cantidad}</span>
                    <button onClick={handleIncrease} className="cantidad-button">+</button>
                </div>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart} disabled={cantidad > stockDisponible}>
                Agregar al Carrito
            </button>
        </div>
    );
}
