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
        <div>
            <h1>{contact.name}</h1>
            <p>
                <FcInvite />
                {contact.email}
            </p>
            <p>
                <FcTwoSmartphones />
                {contact.phone}
            </p>
            <p>
                <FcHome />
                {contact.address.street}, {contact.address.suite},{" "}
                {contact.address.city}, {contact.address.zipcode}
            </p>
            <p>
                <FcGlobe />
                {contact.website}
            </p>
        </div>
    )
}

export default Contact
