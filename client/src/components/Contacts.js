import React from "react"
import Contact from "./Contact"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Contacts() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        const getContacts = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            )
            setContacts(response.data)
        }
        getContacts()
    }, [])
    return (
        <div>
            <ul>
                {contacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Link to={`/contact/${contact.id}`}>
                                {contact.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Contacts
