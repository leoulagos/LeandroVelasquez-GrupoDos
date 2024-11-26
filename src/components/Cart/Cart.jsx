import React from 'react';
import { useCartStore } from '../../store/cartStore.js';
import './Cart.css';
import NavBar from "../Navbar/Navbar";

export default function Cart() {
const cart = useCartStore(state => state.cart);
const removeFromCart = useCartStore(state => state.removeFromCart);
const clearCart = useCartStore(state => state.clearCart);

if (cart.length === 0) {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1>Carrito vacío</h1>
                <p>Agrega productos para comenzar tu compra.</p>
            </div>
        </>
    );
}

return (
    <>
        <NavBar />
        <div className="container">
            <h1 className="mb-20">Carrito de compras</h1>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price.toFixed(3)}</td>
                            <td>${(item.price * item.quantity).toFixed(4)}</td>
                            <td>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-10 py-5 rounded hover:bg-red-600"
                                >
                                    Eliminar Productos
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-20">
                <button
                    onClick={clearCart}
                    className="bg-gray-800 text-white px-20 py-10 rounded hover:bg-gray-900"
                >
                    Vaciar Carrito
                </button>
            </div>
        </div>
    </>
);
}