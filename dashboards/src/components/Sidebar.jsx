import {Link} from "react-router-dom"
import Logo from "../assets/nuevo-logo.png"
const Sidebar = ()=>{
    return (
        <div className="sidebar">
            <ul>
                <img src={Logo} alt="" width="100px"/>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/productos">productos</Link>
                </li>
                <li>
                    <Link to="/usuarios">usuarios</Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar