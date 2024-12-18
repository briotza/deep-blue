import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Incidentes from "../pages/incidentes";
import Relatorios from "../pages/relatorios";
import Externo from "../pages/externo";
import FormularioIncidentes from "../pages/formularioIncidente";
import Notificacoes from "../pages/notificacoes";
import Perfil from "../pages/perfil";
import ProtectedRoute from "./ProtectedRoute"; 
import LandingPage from "../pages/landingPage";

export default function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />

        {/* Rotas protegidas */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/incidentes" element={<ProtectedRoute element={<Incidentes />} />} />
        <Route path="/relatorios" element={<ProtectedRoute element={<Relatorios />} />} />
        <Route path="/formulario-incidentes" element={<ProtectedRoute element={<FormularioIncidentes />} />} />
        <Route path="/formulario-notificacoes" element={<ProtectedRoute element={<Notificacoes />} />} />
        <Route path="/perfil" element={<ProtectedRoute element={<Perfil />} />} />
        <Route path="/externo" element={<ProtectedRoute element={<Externo />} />} />
      </Routes>
    </Router>
  );
}
