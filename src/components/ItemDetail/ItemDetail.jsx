import { useState } from "react";
import { useCartStore } from '../../store/cartStore';  // Importar el store del carrito
import './ItemDetail.css';

export default function ProductDetail({ product, onClose }) {
    const [cantidad, setCantidad] = useState(1);
    const stockDisponible = product.stock;

    // Obtener la acción para agregar un producto al carrito
    const addToCart = useCartStore(state => state.addToCart);

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
        // Agregar el producto al carrito pasando tanto el producto como la cantidad
        addToCart(product, cantidad);

        console.log(`Agregado al carrito: ${product.name} - Cantidad: ${cantidad}`);
        onClose();  // Cerrar el modal o la vista de detalle
    };

    return (
        <div className="product-detail">
            <button className="cerrar-button" onClick={onClose}>X</button>
            <img src={product.img} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Precio: ${product.price.toFixed(3)}</p>
            <p className="product-stock">Stock disponible: {stockDisponible}</p>
            <label>Cantidad:</label>
            <div className="cantidad-selector">
                <div className="cantidad-controls">
                    <button onClick={handleDecrease} className="cantidad-button">-</button>
                    <span className="cantidad-display">{cantidad}</span>
                    <button onClick={handleIncrease} className="cantidad-button">+</button>
                </div>
            </div>
            <button 
                className="add-to-cart" 
                onClick={handleAddToCart} 
                disabled={cantidad > stockDisponible}>Agregar al Carrito</button>
        </div>
    );
}
