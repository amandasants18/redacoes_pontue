import React ,{useContext}from "react"

import { AuthContext } from "../../contexts/auth"
import { Button } from "../LoginPage/styles"

const HomePage = () =>{

const {logout} = useContext(AuthContext)
const handleLogout = ()=>{
logout();
}
    return(
        <>
         <h1>Home Page</h1>
        <Button onClick={handleLogout}>Sair</Button>
        </>
       
    
    )
}

export default HomePage

