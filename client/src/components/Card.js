import React from "react"

function Card({ icon, title, description }) {
    return (
        <div className="cards">
            <h1 className="card-icon">{icon}</h1>
            <h1>{title}</h1>
        </div>
    )
}

export default Card
