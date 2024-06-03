import React from 'react'
import '../App.css'
import{Link} from 'react-router-dom'
import { Flex, Spacer ,Box, Button,Stack, Heading,} from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'

const Navbar = () => {

const{logout, authDetails:{email}} = useContext(AuthContext);

  return (
    <div id='navbar'>
        <Heading as="h3" size="md">{email}</Heading>
        <Link to="/">Home</Link>
        <Link to="/Product">Product Details</Link>
        <Link to="/Login">Login</Link>
        <Stack direction='row' spacing={4} align='center'>
            <Button onClick={logout} colorScheme='yellow' variant='outline'>
                Logout
            </Button>
        </Stack>
    </div>
  )
}

export default Navbar