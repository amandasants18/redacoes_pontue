import styled from 'styled-components'

export const StyledForm = styled.form`

  padding: 20px;
  border-radius: 5px;
`
export const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
height: 100vh;

`;

export const Content = styled.div`
gap: 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

background-color: white;
max-width: 350px;
padding: 20px;
border-radius: 5px;

`;

export const Label = styled.label`
font-size: 18px;
font-weight: 600;
color: #676767;
`;

export const LabelSignUp = styled.label`
font-size: 16px;
color: #676767;
`

export const Labelerror = styled.label`
font-size: 14px;
color: red;
`;



export const Button = styled.button`
padding: 16px 20px;
outline: none;
border: none;
border-radius: 5px;
width: 100%;
cursor: pointer;
background-color: #046ee5;
color: white;
font-weight: 600;
font-size: 16px;
max-width: 350px;
margin-top: 50px;

`;

export const Strong = styled.strong`
cursor: pointer;
a{
text-decoration: none;
color: #676767;
}
`;