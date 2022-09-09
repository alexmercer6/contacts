import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
        </div>
    )
}

export default Navbar
