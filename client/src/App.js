import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contacts from "./components/Contacts"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <main className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route exact path="/contacts" element={<Contacts />} />
                        <Route
                            exact
                            path="/contacts/:id/:contactName"
                            element={<Contacts />}
                        />
                    </Routes>
                </main>
            </BrowserRouter>
            <a
                style={{
                    color: "grey",
                    opacity: "0.8",
                    textDecoration: "none",
                }}
                href="https://www.flaticon.com/free-icons/contacts"
                title="contacts icons"
            >
                Contacts icons created by Freepik - Flaticon
            </a>
        </div>
    )
}

export default App
