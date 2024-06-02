import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product_Details from '../pages/Product_Details'
import PrivateRoutes from './PrivateRoutes'


const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={
            <PrivateRoutes>
                <Home/>
            </PrivateRoutes>}/>

            <Route path='/Login' element={<Login/>}/>

            <Route path='/Product' element={
            <PrivateRoutes>
                <Product_Details/>
            </PrivateRoutes>}/>
        </Routes>
    </>
  )
}

export default Allroutes