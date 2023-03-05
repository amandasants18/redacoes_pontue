
import Input from "../../Input"
import {ChangeEvent, FormEvent, useState, useContext, useEffect} from "react";
import * as C from "./styles";
import { AuthContext } from "../../contexts/auth";
const LoginPage = () => {
const {authenticated,login} = useContext(AuthContext)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

useEffect(()=>{
  localStorage.clear()
},[])
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("submit", {email, password})
    login(email, password)
  }


  const handleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value || "");
   
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value || "");
   
  };


  return (
    <C.Container>
    <C.StyledTitle>Login</C.StyledTitle>
    
    <C.StyledForm onSubmit={handleSubmit}>
    <C.Content>
      <Input
        placeholder="Digite seu login"
        type="text"
        onChange={handleChange}
        value={email}
      ></Input>

      <Input 
        placeholder="Digite sua senha"
        type="password"
        onChange={handleChangePassword}
        value={password}  
      ></Input>
     
      <C.Button type="submit">
        Entrar
      </C.Button>
    </C.Content>

    </C.StyledForm>
   
  </C.Container>
)
  }

export default LoginPage;
