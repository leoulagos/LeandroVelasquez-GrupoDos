import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
    return (
        <div className="benefits-section">
            <h2>¿Por qué elegir PCUP?</h2>
            <div className="benefits-container">
                <div className="benefit">
                    <img src="\public\enviorapido.png" alt="Envío rápido" />
                    <h3>Envío rápido</h3>
                    <p>Recibe tus productos en la puerta de tu casa rápidamente.</p>
                </div>
                <div className="benefit">
                    <img src="\public\garantia.png" alt="Garantía" />
                    <h3>Garantía de calidad</h3>
                    <p>Todos nuestros productos cuentan con garantía oficial.</p>
                </div>
                <div className="benefit">
                    <img src="\public\atencionalcliente.png" alt="Atención al cliente" />
                    <h3>Atención al cliente 24/7</h3>
                    <p>Estamos aquí para ayudarte en cualquier momento.</p>
                </div>
            </div>
        </div>
    );
}

export default BenefitsSection;
