import {useState,useEffect} from "react"
const endpoint = "http://localhost:3001/api/products"

export default function TotalProductos() {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(data =>{
            setProduct(data.data)
        })
        .catch(error => console.log(error))
    }, [])
    console.log(product)
    return(
        <>
            <ul>
                {product.length === 0 && <p>Cargando</p> }
                {
                    <li>
                        <h3>{product.length}</h3>
                    </li>
                }
            </ul>
        </>
    )
}