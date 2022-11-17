import {Link} from "react-router-dom"
import LastProduct from "../components/LastProduct"
import LastUser from "../components/LastUser"
import TotalProductos from "../components/TotalPrdoductos"
import '../assets/Home.css';
const Home = () =>{
    return(
        <main>
            <h1 className="home-h1">¡Bievenido al dashboard de eData-LOG!</h1>
            <div className="padre">
                <article className="home-div">
                    <Link to="/productos">Aqui</Link> 
                    <p>encontraras una lista con nuestros Productos</p>
                </article>
                <article className="home-div">
                    <Link to="/usuarios">Aqui</Link> 
                    <p>encontraras una lista con los Usuarios registrados</p>
                </article>
                <LastProduct  />
                <LastUser />
               <TotalProductos/> 
            </div>
        </main>
    )
}
export default Home