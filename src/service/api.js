import axios from "axios";
const baseURL = "https://desafio.pontue.com.br";
export const api = axios.create({
  baseURL,
});

export const createAccessLogin = async (email, password) => {
  return api.post("/auth/login", { email, password });
};

export const getRedacaoByIdAluno = (id_aluno) => {
  return api.get("/index/aluno/" + id_aluno);
};

export const getRedacaoById = (id_redacao) => {
  return api.get("/redacao/" + id_redacao);
};
