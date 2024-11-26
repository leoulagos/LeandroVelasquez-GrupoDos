import ItemList from "../ItemList/ItemList";
import NavBar from "../Navbar/Navbar";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Shop.css';

export default function Shop() {

    return (
        <>

        <NavBar/>

        <div className="container">
            <ItemList/>
        </div>
        
        <Footer />

        </>
    )
}