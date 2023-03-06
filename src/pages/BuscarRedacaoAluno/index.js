import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  api,
  getRedacaoById,
  getRedacaoByIdAluno,
  verificarValidadeToken,
} from "../../service/api";
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
    console.log(redacao);
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
      <h1>Clique abaixo para buscar redacao por id</h1>
      <Button onClick={handleBuscar}>Listar id</Button>
      <ul>
        {redacao.map((redacao) => (
          <li key={redacao.id}>
            {redacao.id}
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuscarRedacao;
