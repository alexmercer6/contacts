import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
    const linkStyle = {
        color: "#be1c4e",
        textDecoration: "none",
    }
    return (
        <nav className="navbar">
            <h1>Connect</h1>

            <Link to="/" style={linkStyle}>
                <div className="navbar-link">Home</div>
            </Link>

            <Link to="/contacts" style={linkStyle}>
                <div className="navbar-link">Contacts</div>
            </Link>
        </nav>
    )
}

export default Navbar
