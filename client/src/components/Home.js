import React from "react"
import Card from "./Card"
import { FcTwoSmartphones, FcHome, FcGlobe, FcInvite } from "react-icons/fc"

function Home() {
    return (
        <div className="home-container">
            <div className="cards-container">
                <Card title="Phone" icon={<FcTwoSmartphones />} />
                <Card title="Email" icon={<FcInvite />} />
                <Card title="Address" icon={<FcHome />} />
                <Card title="Website" icon={<FcGlobe />} />
            </div>
            <div>
                <h1>
                    <span>Keep</span> <span>Connected</span>
                </h1>
            </div>
        </div>
    )
}

export default Home
