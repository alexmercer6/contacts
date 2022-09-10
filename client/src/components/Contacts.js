import React from "react"
import Contact from "./Contact"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Contacts() {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState("")

    const searchContacts = (e) => {
        setSearch(e.target.value)
    }
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
            <input type="text" onChange={searchContacts} />
            <ul className="contacts-list">
                {contacts
                    .filter((contact) =>
                        contact.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((contact) => {
                        return (
                            <li key={contact.id}>
                                <div className="contact-avatar">
                                    {contact.name.charAt(0)}
                                </div>

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
