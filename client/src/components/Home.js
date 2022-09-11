import React, { useEffect, useState } from "react"
import HashLoader from "react-spinners/HashLoader"
import { Link } from "react-router-dom"

function Home() {
    const [showSpinner, setShowSpinner] = useState(true)
    const hideSpinner = () => {
        setTimeout(() => setShowSpinner(false), 2000)
    }
    useEffect(() => {
        hideSpinner()
        console.log("hi")
    }, [])

    if (showSpinner) {
        return (
            <div className="home-container">
                <HashLoader color="#be1c4e" />
            </div>
        )
    }

    return (
        <div className="home-container">
            <h1>
                See all your connections in one place. Click{" "}
                <Link to="/contacts" style={{ color: "#be1c4e" }}>
                    Contacts
                </Link>{" "}
                to get started.
            </h1>
        </div>
    )
}

export default Home
