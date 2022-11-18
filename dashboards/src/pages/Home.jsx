import LastProduct from "../components/LastProduct"
import LastUser from "../components/LastUser"
import TotalProductos from "../components/TotalPrdoductos"
import TotalUsers from "../components/TotalUsers"
import Rutas from "../components/rutas"
import '../assets/Home.css';
const Home = () =>{
    return(
        <div className="home">
            <h1 className="home-h1">¡Bievenido al dashboard de eData-LOG!</h1>
            <div className="padre">
                <div className="hijo1">
                    <LastProduct />
                    <LastUser />
                </div>
                <div className="totales">
                <TotalProductos/> 
                <TotalUsers />
                <Rutas />
                </div>

            </div>
        </div>
    )
}
export default Home