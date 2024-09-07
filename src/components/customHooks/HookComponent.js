import useFetchData from "./useFetchData"
import useLocalStorage from "./useLocalStorage"

export default function HookComponent(){

    // const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/todos/1")
    // if(data){
    //     console.log(data)
    // }
    // if(error){
    //     console.log(error)
    // }
    const [name, setName] = useLocalStorage("name", "Guest")
    const [job, setJob] = useLocalStorage("job", "engineer")
    
    return (
        <>
        {/* {loading && <p>loading...</p>}
        {error && <p>error</p>}
        {data && (
            <div>
                <h3>Todo Item:</h3>
                <p>{data.title}</p>
            </div>
        )} */}
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        >
        </input>
        <p>Your name is: {name}</p>
        <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        >
        </input>
        <p>Your job is: {job}</p>
        </>

    )
}