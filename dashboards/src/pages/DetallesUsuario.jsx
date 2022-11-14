import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
const endpoint = "http://localhost:3001/api/users"

export default function UsuariosDetalle() {
    const [posts, setPost] = useState([])
    useEffect(()=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(data =>{
           setPost(data.data)
        })
        .catch(error => console.log(error))
    },[])
    return(
        <main>
            <ul className="tarjetas">
                {posts.length === 0 && <p>Cargando</p> }
                {
                    posts.map((post)=>{
                        return(
                            <li key={post.id}>
                            <h1 className="datos">{post.nombre}</h1>
                            <h2 className="datos">{post.apellido}</h2>
                            <h3 className="datos">{post.email}</h3>
                            </li>
                        )
                    })
                }
            </ul>
            <Link to="/">volver a inicio</Link>
        </main>
    )
}
