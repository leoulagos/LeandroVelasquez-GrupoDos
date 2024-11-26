import React from "react";
import { Link } from "react-router-dom";

import './hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h2>¡Bienvenido a PCUP!</h2>
                <p>Encuentra la mejor tecnología</p>
                <Link to="/shop" className="btn">Explorar productos</Link>
            </div>
        </section>
    );
};

export default Hero;
