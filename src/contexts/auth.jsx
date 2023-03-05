import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvicer = ({children}) => {
    
const navigate = useNavigate()
const [user, setUser] = useState(null)

const login = (email, password) =>{
console.log("login", {email, password
})
if(password === 'secret'){
  setUser({id: 123, email})
  navigate('/')
}

}

const logout = () =>{
setUser(null)
navigate('/login')
}
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
        {children}
    </AuthContext.Provider>
  );
};
