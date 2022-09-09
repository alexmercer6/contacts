import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contacts from "./components/Contacts"
import Home from "./components/Home"
import Contact from "./components/Contact"

function App() {
    return (
        <div className="App">
            <Contacts />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route exact path="/contact/:id" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
