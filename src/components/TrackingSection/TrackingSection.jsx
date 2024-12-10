import React, { useState } from 'react';
import './TrackingSection.css';

const TrackingSection = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingInfo, setTrackingInfo] = useState(null);

    const handleTrackingSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para buscar la información del pedido.
        // Pero por ahora, solo dejo mostrando un mensaje de ejemplo.
        setTrackingInfo({
            status: 'En tránsito',
            expectedDelivery: '2024-12-15',
        });
    };

    return (
        <section className="tracking-section">
            <div className="container">
                <h2 className='tracking-title'>Rastrear Pedido</h2>
                <form className="tracking-form" onSubmit={handleTrackingSubmit}>
                    <label htmlFor="tracking-number">Ingresa tu número de seguimiento:</label>
                    <input
                        type="text"
                        id="tracking-number"
                        name="tracking-number"
                        placeholder="Número de seguimiento"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                    />
                    <button type="submit">Rastrear</button>
                </form>
                {trackingInfo && (
                    <div className="tracking-result" id="tracking-result">
                        <h3>Estado del Pedido:</h3>
                        <p><strong>Estado:</strong> {trackingInfo.status}</p>
                        <p><strong>Entrega Estimada:</strong> {trackingInfo.expectedDelivery}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TrackingSection;
