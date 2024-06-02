import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import{useContext} from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
const{authDetails} = useContext(AuthContext);

    if(!authDetails?.isAuthenticated){
        return <Navigate to='/Login'/>
    }

  return children
  
}

export default PrivateRoutes