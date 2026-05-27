import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Principal from "./pages/Principal.jsx";
import Livros from "./pages/Livros.jsx";
import Emprestimos from "./pages/Emprestimos.jsx";
import Reservados from "./pages/Reservados.jsx";
import Perfil from "./pages/Perfil.jsx";
import Gerenciamento from "./pages/Gerenciamento.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
        <Route path="/reservados" element={<Reservados />} />
        <Route path="/reseracvados" element={<Navigate to="/reservados" replace />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/gerenciamento" element={<Gerenciamento />} />
      </Routes>
    </BrowserRouter>
  );
}
