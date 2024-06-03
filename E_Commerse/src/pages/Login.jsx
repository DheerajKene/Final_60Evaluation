import React from 'react'
import { VStack, Container, Heading, Input,Button } from '@chakra-ui/react'
import { useState, useContext, useEffect, useRef} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const Login = () => {
    
    const Myref = useRef("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const{login, authDetails:{isAuthenticated}} = useContext(AuthContext);

    useEffect(()=>{
        Myref.current.focus()
    },[]);

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
            let Token = res.data.token

            login({Token, email})
            

        } catch (error) {
            console.log(error)
            
        }    
    }


    if(isAuthenticated){
        return <Navigate to='/'/>
    }


  return (
    <div>
        <Container marginTop={12}>
        <VStack>
            <Heading as="h1" size="xl" gap={5}>Login Page</Heading>
           
                <Input 
                ref={Myref}
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
        <p>eve.holt@reqres.in</p>
    </Container>
    </div>
  )
}

export default Login