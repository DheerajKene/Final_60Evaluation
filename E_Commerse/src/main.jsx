//imported the libraries as per the requirments.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import {AuthContextProvider} from './Context/AuthContext.jsx'


//the main App componant is wrapped under the chakraProvider, BrowserRouter, AuthContextProvider function here.
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
  </BrowserRouter>
  </AuthContextProvider>
  
  
)
