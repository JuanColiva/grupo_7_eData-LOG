import {Link} from "react-router-dom"
const Home = () =>{
    return(
        <main>
            <h1 className="home-h1">¡Bievenido al dashboard de eData-LOG!</h1>
            <div className="home-div">
            <Link to="/productos">Aqui</Link> 
            <p>encontraras una lista con los Usuarios registrados</p>
            </div>
            <div className="home-div">
            <Link to="/usuarios">Aqui</Link> 
            <p>encontraras una lista con los Usuarios registrados</p>
            </div>   
        </main>
    )
}
export default Home