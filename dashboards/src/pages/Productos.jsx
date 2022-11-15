import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
const endpoint = "http://localhost:3001/api/products"

export default function Productos() {
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
    const increment = ()=> setPage(page < 19 ? page + 1 : 19)
    const decrement = () => setPage(page > 0 ? page - 1 : 0)
    return(
        <main>
            <h1 className="home-h1">Productos de eData-LOG</h1>
            <ul className="tarjetas">
                {posts.length === 0 && <p className="cargando">Cargando</p> }
                {
                    posts.map((post)=>{
                        return(
                            <li key={post.id}>
                            <h5 className="datos"> Producto {post.id}</h5>
                            <h1 className="datos">{post.name}</h1>
                            <h2 className="datos">{post.plan}</h2>
                            <Link to="/detalleProducto/:id" className="datos">Ver mas</Link>
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
