import React from "react"
import PacmanLoader from "react-spinners/PacmanLoader"
import "animate.css"

function Placeholder() {
    return (
        <div className="placeholder-container animate__animated animate__fadeIn">
            <h1>Choose a Contact.</h1>
            <PacmanLoader color="#ffc548" />
        </div>
    )
}

export default Placeholder
