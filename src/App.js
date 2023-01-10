import Header from "./components/Header"
import Employees from "./pages/Employees"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dictionary from "./components/Dictionary"
import Definition from "./pages/Definition"
import Customers from "./components/Customers"
import NotFound from "./components/NotFound"

function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/dictionary" element={<Dictionary />} />
                    <Route path="/definition/:search" element={<Definition />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Header>
        </BrowserRouter>
    )
}

export default App
