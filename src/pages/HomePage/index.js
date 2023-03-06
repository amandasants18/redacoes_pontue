import React, { useContext } from "react";
import * as C from "../../pages/LoginPage/styles";
import { AuthContext } from "../../contexts/auth";
import { Button } from "../LoginPage/styles";
import { Container } from "../LoginPage/styles";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
  };
  const buscarRedacao = () => {
    navigate("/buscar-redacao-id");
  };

  const verifiqueId = () => {
    navigate("/buscar");
  };
  return (
    <>
      <C.StyledTitle>Home</C.StyledTitle>
      <Container>
        <Button onClick={verifiqueId}>Verifique o id da redação</Button>
        <Button onClick={buscarRedacao}>
          Buscar Redação por id da Redação
        </Button>
        <Button onClick={handleLogout}>Sair</Button>
      </Container>
    </>
  );
};

export default HomePage;
