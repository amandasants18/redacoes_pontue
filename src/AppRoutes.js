import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateRedacao from "./pages/CreateRedacao";
import { AuthProvicer, AuthContext } from "./contexts/auth";
import { useContext } from "react";



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
            path="/criar-redacao"
            element={
              <Private>
                <CreateRedacao />
              </Private>
            }
          />
         
          
          
        </Routes>
      </AuthProvicer>
    </BrowserRouter>
  );
};

export default AppRoutes;
