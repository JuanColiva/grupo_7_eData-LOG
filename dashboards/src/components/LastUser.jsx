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
        <h2 className="home-h1">Ultimo usuario.</h2>
            <ul className="home-list-u">
                {usuario.length === 0 && <p>cargando</p>}
                {
                    <li key={usuario.id}>
                        <h3>nombre: {usuario.nombre}</h3>
                        <h3>apellido: {usuario.apellido}</h3>
                    </li>
                }
            </ul>
        </>
    )
}