import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
const endpoint = "http://localhost:3001/api/users"

export default function UsuariosDetalle() {
    const [posts, setPost] = useState([])
    const [page, setPage] = useState([0])
    useEffect(()=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(data =>{
           setPost(data.data)
        })
        .catch(error => console.log(error))
    },[])
    useEffect(()=>{
        const api = async () =>{
            try {
                let request = await fetch(endpoint)
                let data = await request.json()
                let offset = page*2
                setPost(data.data.splice(offset,2))
            } catch(error){
            console.log(Error)
    }
}
    api()
    },[page])
    const increment = ()=> setPage(page < 19 ? page + 1 : 19)
    const decrement = () => setPage(page > 0 ? page - 1 : 0)
    return(
        <main>
            <ul className="tarjetas">
                {posts.length === 0 && <p>Cargando</p> }
                {
                    posts.map((post)=>{
                        return(
                            <li key={post.id}>
                            <h5 className="datos">usuario n°{post.id}</h5>
                            <h1 className="datos">{post.nombre +" " + post.apellido}</h1>
                            <h2 className="datos">{post.email}</h2>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={()=> decrement()}>previus</button>
            <button onClick={()=> increment()}>next</button>
            <Link to="/">volver a inicio</Link>
        </main>
    )
}
