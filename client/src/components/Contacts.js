import React from "react"
import Contact from "./Contact"
import axios from "axios"
import { useEffect, useState } from "react"

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
            {/* {contacts.map((contact) => {
                return (
                    <Contact
                        key={contact.id}
                        name={contact.name}
                        email={contact.email}
                        username={contact.username}
                        address={contact.address}
                        phone={contact.phone}
                        website={contact.website}
                        company={contact.company}
                    />
                )
            })} */}
        </div>
    )
}

export default Contacts
