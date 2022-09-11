import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
    const linkStyle = {
        color: "#be1c4e",
        textDecoration: "none",
    }
    return (
        <nav className="navbar">
            <h1>Contacts</h1>
            <div className="navbar-link">
                <Link to="/" style={linkStyle}>
                    Home
                </Link>
            </div>
            <div className="navbar-link">
                <Link to="/contacts" style={linkStyle}>
                    Contacts
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
