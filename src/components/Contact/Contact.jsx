import './Contact.css';
import NavBar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from '../Footer/Footer';

export default function Contact() {
    return (
        <>
            <Banner />

            <NavBar />

            <div className="contacto-container">
                <h1>Contacto</h1>
                <p>
                    En PCUP, estamos aquí para ayudarte. Si tienes alguna pregunta, 
                    inquietud o necesitas asistencia, no dudes en ponerte en contacto con nosotros.
                </p>
                <p>
                    Puedes comunicarte a través de nuestro correo electrónico: 
                    <a href="mailto:soporte@pcup.com"> soporte@pcup.com</a>
                </p>
                <p>
                    También puedes llamarnos al teléfono: 
                    <a href="tel:+56994047245"> +569 9 9045 6845</a>
                </p>
                <p>
                    Nuestro equipo está disponible de lunes a viernes, 
                    de 9:00 AM a 6:00 PM para ayudarte con cualquier consulta.
                </p>
                <p>
                    Agradecemos tu interés en nuestros productos y esperamos poder atenderte pronto.
                </p>
            </div>

            

            <Footer />

        </>
    );
}
