import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import ListaIncidentes from "../components/incidentes/listaIncidentes";


export default function WebRoutes () {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/incidentes" element={<ListaIncidentes/>}/>
            </Routes>
        </Router>
    )
}