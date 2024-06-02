import React from 'react'
import { VStack, Container, Heading, Input,Button } from '@chakra-ui/react'
import { useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const Login = () => {
    const NavLogin = useNavigate()
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const{login} = useContext(AuthContext);

    async function HandleSubmit(){
        try {
            let res = await axios({
                method:"post",
                url:"https://reqres.in/api/login",
                data:{
                    email,
                    password
                }
            });

            login(res.data.token)
            NavLogin('/')

        } catch (error) {
            console.log(error)
            
        }
    }


  return (
    <div>
        <Container marginTop={12}>
        <VStack>
            <Heading as="h1" size="xl" gap={5}>Login Page</Heading>
           
                <Input 
                placeholder="Email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                mb={4} 
                />
                <Input 
                placeholder="Password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                mb={4} 
                />
                <Button onClick={HandleSubmit} type="submit" colorScheme="teal" mb={4}>Login</Button>
       
        </VStack>
    </Container>
    </div>
  )
}

export default Login