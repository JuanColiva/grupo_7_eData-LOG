import {Link} from "react-router-dom"

const Rutas = () => {
    return(
        <>
            <ul className="total">
                <li>
                    <Link to="/productos">Aqui</Link> 
                    <h3>encontraras una lista con nuestros Productos</h3>
                </li>
            </ul>
            <ul className="total">
                <li>
                    <Link to="/usuarios">Aqui</Link> 
                    <h3>encontraras una lista con los Usuarios registrados</h3>
                </li>
            </ul>
        </>
    )
}

export default Rutas
