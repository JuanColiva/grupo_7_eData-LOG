import {Link} from "react-router-dom"

const Sidebar = ()=>{
    return (
        <div className="sidebar">
            <ul>
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