import './About.css';
import NavBar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews'

export default function About() {
    return (
        <>
            <NavBar />
            
            <div className="about-container">
                <h1>Sobre Nosotros</h1>
                <p>
                    En PCUP, somos un equipo apasionado por la tecnología y la innovación. 
                    Desde nuestros inicios, hemos estado comprometidos con ofrecerte los 
                    mejores productos para satisfacer todas tus necesidades tecnológicas 🎮
                </p>
                <p>
                    Nuestra misión es brindarte una experiencia de compra excepcional, 
                    combinando calidad, variedad y precios competitivos. Trabajamos arduamente 
                    para seleccionar artículos que no solo cumplan con tus expectativas, 
                    sino que las superen ✅
                </p>
                <p>
                    Nos enorgullece ofrecer un servicio al cliente inigualable. 
                    Cada miembro de nuestro equipo está aquí para ayudarte a encontrar 
                    el producto perfecto para ti. Ya sea que estés buscando un nuevo 
                    ordenador portátil, accesorios o componentes...
                </p>
                <p>
                ¡Estamos aquí para ayudarte!👨‍💻
                </p>
                <p>
                    Gracias por elegir PCUP como tu tienda de confianza. 
                    Esperamos que disfrutes de tu experiencia con nosotros y encuentres 
                    lo que necesitas para llevar tu rendimiento al siguiente nivel ✨
                </p>
            </div>
            
            <Reviews />

            <Footer />
        </>
    );
}

