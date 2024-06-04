//imported the libraries as per the requirments.
import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PrivateRoutes from './PrivateRoutes'
import Product_Details from '../pages/Product_Details'

//function AllRoutes gives access to the user to redirect the page whout loading the whole componant.
const Allroutes = () => {
    //using PrivateRoute function here the pages is been protected from the user if the user is not logged in.
  return (
    <>
        <Routes>
            <Route path='/' element={
            <PrivateRoutes>
                <Home/>
            </PrivateRoutes>}/>

            <Route path='/Product/:id' element={
            <PrivateRoutes>
                <Product_Details/>
            </PrivateRoutes>}/>

            <Route path='/Login' element={<Login/>}/>
        </Routes>
    </>
  )
}

export default Allroutes