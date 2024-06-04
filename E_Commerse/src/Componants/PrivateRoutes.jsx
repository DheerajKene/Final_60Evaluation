//imported the libraries as per the requirments.
import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import{useContext} from 'react'
import { Navigate } from 'react-router-dom'

//function PrivateRoute is used for makes the route private for the user if the user is not logged in.
const PrivateRoutes = ({children}) => {
const{authDetails} = useContext(AuthContext);    //the required element authdetails is retrived from the Authcontext when needed.

//condition for if the user is not logged in then user will not get access to the Home page and is redirected to the login page.
    if(!authDetails?.isAuthenticated){
        return <Navigate to='/Login'/>//Navigate function is redirect user to the login page hare.
    }

  return children
  
}

export default PrivateRoutes