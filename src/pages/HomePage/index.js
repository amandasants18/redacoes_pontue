import React ,{useContext, useState}from "react"
import { api, getRedacaoById } from "../../service/api"
import { AuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"
import { Button } from "../LoginPage/styles"

const HomePage = () =>{

const {logout} = useContext(AuthContext)
const [aluno,setAluno] = useState()
const handleLogout = ()=>{
logout();
}
const buscarRedacao = ()  =>{
    const response= getRedacaoById()
   
    response.then((response => {
        console.log(response)
     setAluno(response)
    }))
    console.log(aluno)
 
}
return(
        <>
         <h1>Home Page</h1>
        <Link to = '/criar-redacao'>Buscar redacao</Link>
        <Button onClick={buscarRedacao}>Buscar Redação por id</Button>
        <Button onClick={handleLogout}>Sair</Button>
        </>
    )
}

export default HomePage

