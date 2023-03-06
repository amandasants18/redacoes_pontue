import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BuscarRedacao from "./pages/BuscarRedacaoAluno";

import { AuthProvicer, AuthContext } from "./contexts/auth";
import { useContext } from "react";
import BuscarRedacaoId from "./pages/BuscarRedacaoId";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <h1>carregando</h1>;
    }
    if (!authenticated) {
      return <Navigate to="/login"></Navigate>;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <AuthProvicer>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          />
          <Route
            path="/buscar"
            element={
              <Private>
                <BuscarRedacao />
              </Private>
            }
          />


          <Route
            path="/buscar-redacao-id"
            element={
              <Private>
                <BuscarRedacaoId />
              </Private>
            }
          />
        </Routes>
      </AuthProvicer>
    </BrowserRouter>
  );
};

export default AppRoutes;
