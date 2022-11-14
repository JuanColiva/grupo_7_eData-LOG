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
                            <h3 className="datos">{post.nombre}</h3>
                            <h4 className="datos">{post.apellido}</h4>
                            <h4 className="datos">{post.email}</h4>
                            </li>
                        )
                    })
                }
            </ul>
            <Link to="/">volver a inicio</Link>
        </main>
    )
}
