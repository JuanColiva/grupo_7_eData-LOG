import {useState,useEffect} from "react"
const endpoint = "http://localhost:3001/api/users/last"

export default function LastUser() {
    const [usuario, setUsuario] = useState([])
    useEffect(()=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(data =>{
            setUsuario(data.data)
        })
        .catch(error => console.log(error))
    }, [])
    return(
        <>
            <ul className="home-list">
                {usuario.length === 0 && <p>cargando</p>}
                {
                    <li>
                        <h3>Ultimo usuario.</h3>
                        <h4>nombre: {usuario.nombre}</h4>
                        <h4>apellido: {usuario.apellido}</h4>
                        <img src={`http://localhost:3001/avatars/${usuario.imagene}`}  alt="" />
                    </li>
                }
            </ul>
        </>
    )
}