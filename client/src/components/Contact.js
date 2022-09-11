import axios from "axios"
import React, { useEffect, useState } from "react"
import { FcTwoSmartphones, FcHome, FcGlobe, FcInvite } from "react-icons/fc"

function Contact({ selected }) {
    let [contact, setContact] = useState({})
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        const getContact = async () => {
            setLoading(true)
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${selected}`
            )
            console.log(response.data)
            setContact(response.data)
            setLoading(false)
        }
        getContact()
    }, [selected])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div style={{ width: "100%" }}>
            <div className="contact-title-container">
                <div className="contact-avatar">{contact.name.charAt(0)}</div>
                <h1>{contact.name}</h1>
                <p>{contact.company.name}</p>
            </div>
            <div className="contact-info">
                <p>
                    <FcInvite /> {contact.email}
                </p>

                <p>
                    <FcHome /> {contact.address.street}, {contact.address.suite}
                    , {contact.address.city}, {contact.address.zipcode}
                </p>
                <p>
                    <FcTwoSmartphones /> {contact.phone}
                </p>
                <p>
                    <FcGlobe /> {contact.website}
                </p>
            </div>
        </div>
    )
}

export default Contact
