import * as C from '../../pages/LoginPage/styles'
import Input from "../../Input";
import { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { api, getRedacaoById } from '../../service/api';
import { useNavigate } from 'react-router-dom';

export const BuscarRedacaoId = () =>{

const [id, setId] = useState('')
const [urls, setUrls] = useState([])
const navigate = useNavigate()


      const handleChange = (event) => {
        event.preventDefault();
        setId(event.target.value || "");
       
      };
      const handleBuscarRedacao = () =>{
  
        getRedacaoById(id).then((response)=>{
           const urls = response.data.data.urls
           setUrls(urls)
    
        })
       }

       const handleBack = () =>{
       navigate('/')
       }

    return(
        <>
           <FaAngleLeft
        cursor="pointer"
        color="blue"
        size={40}
        onClick={handleBack}
      ></FaAngleLeft>
        <C.Container>
   
   <C.StyledTitle>Buscar redação por id</C.StyledTitle>
   

   <C.Content>
     <Input
       placeholder="Digite o id da sua redação"
       type="text"
       onChange={handleChange}
       value={id}
     ></Input>
   

     <C.Button onClick={handleBuscarRedacao}>
       Buscar
     </C.Button>
   </C.Content>

   
   <C.ContainerUrl>
  
       {urls.map((response)=>
       response.url )}
       
   </C.ContainerUrl>


 </C.Container>
)

        </>
    )
}

export default BuscarRedacaoId