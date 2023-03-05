import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthProvicer, AuthContext } from "./contexts/auth";
import { useContext } from "react";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const {authenticated} = useContext(AuthContext)
    if(!authenticated) {
      return <Navigate to = '/login'></Navigate>
    }
    return children
  }
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
        </Routes>
      </AuthProvicer>
    </BrowserRouter>
  );
};

export default AppRoutes;
