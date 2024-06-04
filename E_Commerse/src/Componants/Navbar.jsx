//imported the libraries as per the requirments.
import React from 'react'
import '../App.css'
import{Link} from 'react-router-dom'
import { Flex, Spacer ,Box, Button,Stack, Heading,} from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'


//function Navbar is used to show the navbar elements onto the navbar.
const Navbar = () => {

const{authDetails:{email}} = useContext(AuthContext);  //the required elements email is retrived from the Authcontext when needed.

   
    //componants design with help of Chakra UI.
  return (
    <div id='navbar'>
        <Heading as="h3" size="md">{email}</Heading>
        <Link to="/">Home</Link>
        <Link to="/Product/:id">Product Details</Link>
        <Link to="/Login">Login</Link>
    </div>
  )
}

export default Navbar