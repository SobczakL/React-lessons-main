import { useParams } from "react-router-dom"

export default function Users(){
    let {id} = useParams();
    return(
        <div>
            <p>Now showing User: {id}</p>
        </div>
    )
}