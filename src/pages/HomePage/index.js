import React ,{useContext, useState}from "react"
import { api, getRedacaoById } from "../../service/api"
import { AuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"
import { Button } from "../LoginPage/styles"
import { Container } from "../LoginPage/styles"
import { useNavigate } from "react-router-dom"


const HomePage = () =>{

const {logout} = useContext(AuthContext)
const [aluno,setAluno] = useState()
const navigate = useNavigate()
const handleLogout = ()=>{
logout();
}
const buscarRedacao = ()  =>{

 navigate('/buscar-redacao-id')
}
return(
        <>
         <h1>Home Page</h1>
        <Container>
        <Link to = '/buscar'>Verifique o id da sua redação</Link>
        <Button onClick={buscarRedacao}>Buscar Redação por id da Redação</Button>
        <Button onClick={handleLogout}>Sair</Button>
        </Container>
 
        
        </>
    )
}

export default HomePage

