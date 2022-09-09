import React from "react"

function Contact({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Contact
