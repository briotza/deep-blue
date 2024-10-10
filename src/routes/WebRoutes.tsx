import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";


export default function WebRoutes () {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}