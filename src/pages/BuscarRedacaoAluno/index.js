import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import * as C from "../../pages/LoginPage/styles";
import { useNavigate } from "react-router-dom";
import { getRedacaoByIdAluno } from "../../service/api";
import { Button } from "../LoginPage/styles";

const BuscarRedacao = () => {
  const [redacao, setRedacao] = useState([]);
  const navigate = useNavigate();
  const handleBuscar = () => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const response = getRedacaoByIdAluno(userInfo.aluno_id);
    response.then((response) => {
      setRedacao(response.data.data);
    });
  };
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <FaAngleLeft
        cursor="pointer"
        color="blue"
        size={40}
        onClick={handleBack}
      ></FaAngleLeft>
      <C.Container>
        <C.StyledTitle>Liste os ids das suas redações.</C.StyledTitle>
        <Button onClick={handleBuscar}>Listar id</Button>
        <ul>
          {redacao.map((redacao) => (
            <li key={redacao.id}>{redacao.id}</li>
          ))}
        </ul>
      </C.Container>
    </div>
  );
};

export default BuscarRedacao;
