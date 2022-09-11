import axios from "axios"
import React, { useEffect, useState } from "react"
import { FcTwoSmartphones, FcHome, FcGlobe, FcInvite } from "react-icons/fc"
import HashLoader from "react-spinners/HashLoader"
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
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <HashLoader color={"#be1c4e"} loading={loading} />
            </div>
        )
    }

    return (
        <div style={{ width: "100%" }}>
            <div className="contact-title-container">
                <div className="contact-avatar">{contact.name.charAt(0)}</div>
                <h1>{contact.name}</h1>
                <p>{contact.company.name}</p>
            </div>
            <div className="contact-info">
                <div>
                    <h1>
                        <FcInvite />
                    </h1>
                    <p style={{ opacity: "0.5" }}>Email</p>
                    <p>{contact.email}</p>
                </div>
                <div>
                    <h1>
                        <FcHome />
                    </h1>
                    <p style={{ opacity: "0.5" }}>Address</p>
                    <p>
                        {contact.address.street}, {contact.address.suite},{" "}
                        {contact.address.city}, {contact.address.zipcode}
                    </p>
                </div>
                <div>
                    <h1>
                        <FcTwoSmartphones />
                    </h1>
                    <p style={{ opacity: "0.5" }}>Mobile</p>
                    <p>{contact.phone}</p>
                </div>
                <div>
                    <h1>
                        <FcGlobe />
                    </h1>
                    <p style={{ opacity: "0.5" }}>Website</p>
                    <p>{contact.website}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
