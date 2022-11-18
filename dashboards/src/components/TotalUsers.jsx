import {useState,useEffect} from "react"
const endpoint = "http://localhost:3001/api/users"

export default function TotalProductos() {
    const [users, setProduct] = useState([])
    useEffect(()=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(data =>{
            setProduct(data.data)
        })
        .catch(error => console.log(error))
    }, [])
    return(
        <>
            <ul className="total">
                {users.length === 0 && <p>Cargando</p> }
                {
                    <li>
                        <h3>total de usuarios</h3>
                        <h3>{users.length}</h3>
                    </li>
                }
            </ul>
        </>
    )
}