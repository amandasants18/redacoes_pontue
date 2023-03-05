import React, {useState} from "react"
import { api, getRedacaoById, getRedacaoByIdAluno, verificarValidadeToken } from "../../service/api"
import { Button } from "../LoginPage/styles"

const CreateRedacao = () => {

const [redacao, setRedacao] = useState([])

    const handleBuscar = () => {
       const response= getRedacaoByIdAluno()
       response.then((response => {
        setRedacao(response.data.data)
       }))
    
    }

    return(
        <div>
            <Button onClick={handleBuscar}>Buscar redacao por id</Button>
            <ul>
            {redacao.map((redacao) => 
            <li key={redacao.id}>
                {redacao.id}
                {redacao.numero}
            </li>
            )}
            </ul>
        </div>
    )
}

export default CreateRedacao