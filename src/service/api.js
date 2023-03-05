import axios from 'axios';
const baseURL = 'https://desafio.pontue.com.br'
export const api = axios.create({
 baseURL
});


export const createAccessLogin = async (email, password) => {
    return api.post('/auth/login', {email, password})
}



export const getRedacaoByIdAluno = () =>{
    return api.get('/index/aluno/ef0c1f20-664a-11eb-9dbc-91c7d6b63ffc')
}


export const getRedacaoById = () =>{
    return api.get('/redacao/1edbb648-8106-6e8a-98c1-002248321348')
}

