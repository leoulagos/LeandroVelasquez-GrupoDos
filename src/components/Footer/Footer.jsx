import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import './Footer.css';

export default function Footer () {
    return (
        <footer className="pie_de_pagina">
            <div className="contenido_pie_de_pagina">
                <div className="seccion_pie_de_pagina sobre_nosotros">
                    <h2 className="texto_logo">PCUP - Computacion & Electronica</h2>
                    <p>Tu tienda de confianza para todo lo relacionado con computadoras y accesorios.</p>
                    <p>Calidad y servicio al cliente son nuestras prioridades.</p>
                </div>
                <div className="seccion_pie_de_pagina">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><Link to="/">Tienda</Link></li>
                        <li><Link to="/About">Nosotros</Link></li>
                        <li><Link to="/Contact">Contacto</Link></li>
                        {/* <li><Link to="/faq">Preguntas Frecuentes</Link></li> Cambia href por to */}
                    </ul>
                </div>
                <div className="seccion_pie_de_pagina redes_sociales">
                    <h3>Redes Sociales</h3>
                    <div className="iconos_sociales">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pie_de_pagina_inferior">
                <p>&copy; 2024 PCUP | Todos los derechos reservados</p>
            </div>
        </footer>
    );
};
