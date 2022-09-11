import React from "react"
import Contact from "./Contact"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Placeholder from "./Placeholder"
import "animate.css"

function Contacts() {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState("")

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
        <div className="contacts-container">
            <div className="contacts animate__animated animate__fadeIn">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search..."
                    onChange={searchContacts}
                />
                <ul className="contacts-list">
                    {contacts

                        .filter((contact) =>
                            contact.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .sort((a, b) => (a.name > b.name ? 1 : -1))

                        .map((contact) => {
                            return (
                                <li
                                    className="contact-item"
                                    key={contact.id}
                                    onClick={() => {
                                        setSelected(contact.id)
                                    }}
                                >
                                    <div
                                        className={
                                            selected === contact.id
                                                ? "contact-avatar selected-contact"
                                                : "contact-avatar"
                                        }
                                    >
                                        {contact.name.charAt(0)}
                                    </div>

                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            fontSize: "20px",
                                            margin: "20px",
                                            fontWeight: "bold",
                                        }}
                                        to={`/contacts/${contact.id}/${contact.name}`}
                                    >
                                        {contact.name}
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            </div>
            <div className="contact">
                {selected ? <Contact selected={selected} /> : <Placeholder />}
            </div>
        </div>
    )
}

export default Contacts
