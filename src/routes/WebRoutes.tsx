import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Incidentes from "../pages/incidentes";
import Relatorios from "../pages/relatorios";
import Externo from "../pages/externo";


export default function WebRoutes () {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/incidentes" element={<Incidentes/>}/>
                <Route path="/relatorios" element={<Relatorios/>} />
                <Route path="/externo" element={<Externo/>} />
            </Routes>
        </Router>
    )
}