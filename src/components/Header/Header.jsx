import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header({ 
    title = "¡Bienvenido a PCUP!", 
    description = "Descubre una amplia variedad de productos de calidad a los mejores precios.",
    buttonText = "Ver artículos" 
}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('../shop'); // Redirige a la ruta de la tienda
    };

    return (
        <>
            <header className="main">
                <div className="main-contenido">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>¡Compra con confianza y encuentra lo que necesitas!</p>
                </div>
                <div className="button-bar">
                    <button className="tienda-button" onClick={handleButtonClick}>{buttonText}</button>
                </div>
            </header>
        </>
    );
}
