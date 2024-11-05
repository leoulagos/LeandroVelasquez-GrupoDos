import NavbarScript from "./NavbarScript";
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function NavBar() {

    return (
        <>

            <nav>
            <a href="#" id="logo"><img src="/ecommercereact/public/logo.svg" alt="Logo" /></a>
            <ul id="navbar">
                    <li><Link to="/Home">Inicio</Link></li>
                    <li><Link to="/Shop">Productos</Link></li>
                    <li><Link to="/About">Nosotros</Link></li>
                    <li><Link to="/Contact">Contacto</Link></li>
                </ul>
                <div id="menu-toggle" className="menu-icon">
                    <i className="fa-solid fa-bars"></i>
                </div>

                <NavbarScript />

            </nav>
        </>
    );
}

