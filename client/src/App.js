import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            )
            setUsers(response.data)
        }
        getUsers()
    }, [])

    return <div className="App"></div>
}

export default App
