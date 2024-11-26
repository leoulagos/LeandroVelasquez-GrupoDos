import NavbarScript from "./NavbarScript";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';  // Importamos el store del carrito

export default function NavBar() {
    const totalItems = useCartStore((state) =>
        state.cart.reduce((sum, item) => sum + item.quantity, 0)
    );

    return (
        <>
            <nav>
                <Link to="/Home" id="logo">
                    <img src="/logo.svg" alt="Logo" />
                </Link>
                <ul id="navbar">
                    <li><Link to="/Home">Inicio</Link></li>
                    <li><Link to="/Shop">Productos</Link></li>
                    <li><Link to="/About">Nosotros</Link></li>
                    <li><Link to="/Contact">Contacto</Link></li>
                    {/* Agregar el ícono del carrito al menú en pantallas pequeñas */}
                    <li className="cart-icon">
                        <Link to="/cart">
                            <i className="fa-solid fa-shopping-cart"></i> {/* Icono de carrito */}
                            {totalItems > 0 && (
                                <span className="cart-badge">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>
                <div id="menu-toggle" className="menu-icon">
                    <i className="fa-solid fa-bars"></i>
                </div>

                <NavbarScript />
            </nav>
        </>
    );
}
