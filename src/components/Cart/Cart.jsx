import React from 'react';
import { useCartStore } from '../../store/cartStore';
import './Cart.css';
import NavBar from "../Navbar/Navbar";

export default function Cart() {
    const cart = useCartStore(state => state.cart);
    const removeFromCart = useCartStore(state => state.removeFromCart);
    const clearCart = useCartStore(state => state.clearCart);
    const reduceQuantity = useCartStore(state => state.reduceQuantity); 

    // Función para finalizar la compra (aun en construccion)

    const finalizePurchase = () => {
        console.log("Finalizando compra...");
    };

    const totalGeneral = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <>
                <NavBar />
                <div className="cart-container">
                    <h1 className="cart-title">Carrito vacío</h1>
                    <img className="cart-empty-img" src="/carritovacio.png" alt="Carrito Vacio" />
                    <p>Agrega productos para comenzar su compra.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <NavBar />
            <div className="cart-container">
                <h1 className="cart-title margin-bottom-20">Carrito de compras</h1>
                <table className="cart-table">
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
                                <td>${(item.price * item.quantity).toFixed(3)}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.id)} className="button button--red button--medium button-text-white">Eliminar Producto</button>
                                    <button onClick={() => reduceQuantity(item.id)} className="button button--red button--medium button-text-white margin-left-10">Eliminar 1 Unidad</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="margin-top-20">
                    <div className="flex justify-between margin-bottom-10">
                        <h2 className="text-xl font-semibold">Total General:</h2>
                        <h2 className="text-xl font-semibold">${totalGeneral.toFixed(3)}</h2>
                    </div>
                    <div className="buttons-container margin-top-10">
                        <button 
                            onClick={clearCart} 
                            className="button button--gray button--large button-text-white margin-right-5">Vaciar Carrito
                        </button>
                        <button 
                            onClick={finalizePurchase}
                            className="button button--gray button--large button-text-white margin-right-5">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </>
    );
}
