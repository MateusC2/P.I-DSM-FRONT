import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const loginAsAluno = () => setUser({ nome: "João Silva", role: "aluno" });
  const loginAsAdmin = () => setUser({ nome: "Administrador", role: "admin" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loginAsAluno, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
