//imported the libraries as per the requirments.
import React from 'react'
import { createContext , useState} from 'react'
import axios from 'axios'

export const AuthContext = createContext();//the value of createContext is stored in the Authcontext here. 

//function AuthContextProvider is used as wrpper componant to wrap the main App componant with the helps of this user can access the data anywhere in the project.
export function AuthContextProvider({children}){
    const[authDetails, setAuthDetails] = useState({ isAuthenticated: false, token: null, email: null })//this state is used to store the authstate status of user.

    const login = ({Token, email})=>{ //this login function is used to to store the Authdetails of user that is isAuthenticated, email and token(get from the reqres api),and also it changes the isAuthentication status true.

        setAuthDetails({
            isAuthenticated: true,
            token:Token,
            email:email
        });
    };

    const logout = ()=>{//this logout function is used to store the Authdetails of user and also it changes the isAuthentication status false.
        setAuthDetails({
            isAuthenticated: false,
            token:null,
            email:null
        })
    }
//child function login and logout is passed through the Provider function ehich helps to access the child function anywhere in the project.
    return <AuthContext.Provider value={{authDetails, logout, login}}>{children}</AuthContext.Provider>//passing the authdetails, login, logout by provider function.

}    