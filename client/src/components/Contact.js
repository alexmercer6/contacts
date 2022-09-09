import React from "react"
import { FcTwoSmartphones, FcHome, FcGlobe, FcInvite } from "react-icons/fc"

function Contact({ name, username, email, address, phone, website, company }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>
                <FcInvite />
                {email}
            </p>
            <p>
                <FcTwoSmartphones />
                {phone}
            </p>
            <p>
                <FcHome />
                {address.street}, {address.suite}, {address.city},{" "}
                {address.zipcode}
            </p>
            <p>
                <FcGlobe />
                {website}
            </p>
        </div>
    )
}

export default Contact
