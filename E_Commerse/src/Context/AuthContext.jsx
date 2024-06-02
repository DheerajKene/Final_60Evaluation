import React from 'react'
import { createContext , useState} from 'react'
import axios from 'axios'

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const[authDetails, setAuthDetails] = useState({ isAuthenticated: false, token: null, email: null })

    const login = (token)=>{

        setAuthDetails({
            isAuthenticated: true,
            token:token,
            email:email
        });
    };

    const logout = ()=>{
        setAuthDetails({
            isAuthenticated: true,
            token:null,
            email:null
        })
    }

    return <AuthContext.Provider value={{authDetails, logout, login}}>{children}</AuthContext.Provider>

}    