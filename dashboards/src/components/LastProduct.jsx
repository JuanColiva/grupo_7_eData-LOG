import {useState,useEffect} from "react"
const endpoint = "http://localhost:3001/api/products/last"

export default function LastProduct() {
    const [producto, setProducto] = useState([])

    useEffect(()=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(data =>{
            setProducto(data.data)
        })
        .catch(error => console.log(error))
    }, [])
    return(
        <>
        <h2 className="home-h1">Ultimo producto.</h2>
            <ul className="home-list">
                {producto.length === 0 && <p>cargando</p>}
                {
                    <li key={producto.id}>
                        <h3>{producto.name}</h3>
                        <img src={`http://localhost:3001/products/${producto.imagene}`}  alt="" />
                    </li>
                }
            </ul>
        </>
    )
}