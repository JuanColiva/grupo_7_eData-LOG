import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
const endpoint = "http://localhost:3001/api/products"

export default function ProductosDetalle() {
    const [posts, setPost] = useState([])
    const [page, setPage] = useState([0])

    useEffect(()=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(data =>{
           setPost(data.data.splice(0.2))
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
    const increment = ()=> setPage(page < 5 ? page + 1 : 5)
    const decrement = () => setPage(page > 0 ? page - 1 : 0)
    return(
        <main>
            <ul className="tarjetas">
                {posts.length === 0 && <p>Cargando</p> }
                {
                    posts.map((post)=>{
                        return(
                            <li key={post.id}>
                            <h5 className="datos">producto n°{post.id}</h5>
                            <h3 className="datos">{post.name}</h3>
                            <h3 className="datos">{post.plan}</h3>
                            <img src={`http://localhost:3001/products/${post.imagene}`}  alt="" />
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
