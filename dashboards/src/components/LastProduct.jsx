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
            <ul className="home-list">
                {producto.length === 0 && <p>cargando</p>}
                {
                    <li >
                        <h3>Ultimo producto.</h3>
                        <h4>{producto.name}</h4>
                        <picture><img src={`http://localhost:3001/products/${producto.imagene}`}  alt="" /></picture>
                    </li>
                }
            </ul>
        </>
    )
}