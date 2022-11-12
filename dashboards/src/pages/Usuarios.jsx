import {useState,useEffect} from "react"
const endpoint = "http://localhost:3001/api/users"


export default function Productos() {
    const [post, setPost] = useState([])
    

    useEffect(()=>{
        const api = async()=>{
            try{
                let request = await fetch(endpoint)
                let data = await request.json()
                setPost(data.splice(0.5))
            } catch(error){
                console.log(error)
            }
        }
        api()
    },[])
    return(
        <main>
            <ul>{post.map(post => <li key={post.id}>{post}</li>)}</ul>
        </main>
    )
}
