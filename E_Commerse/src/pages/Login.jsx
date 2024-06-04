//imported the libraries as per the requirments.
import React from 'react'
import { useParams } from "react-router-dom";
import { VStack, Container, Heading, Input,Button } from '@chakra-ui/react'
import { useState, useContext, useEffect, useRef} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const Login = () => {
    
    const Myref = useRef(''); //useRef hook is used to focus onto the input tag as the page load.
    const[email, setEmail] = useState("");//this state is used to store the value of the user's email.
    const[password, setPassword] = useState("");  //this state is used to store the value of the user's password.
    const{login, authDetails:{isAuthenticated}} = useContext(AuthContext);  //login, authDetails  retrived from the context APi by using AuthContext in useContext.

    //this useEffect hook is used onMount lifecycle events which helps to focus onto the input tag as the page load.
    useEffect(()=>{
        Myref.current.focus();
    },[]);


    //function HandleSubmit is invoked onClicking the button which helps to make post request with login details by axios.
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
            let Token = res.data.token //token is stored here which has got when the post request is made.

            login({Token, email}) //login function is calls here to send the token and the user's email id to the context api.
            

        } catch (error) {
            console.log(error)
            
        }    
    }

//this status of IsAuthenticated from context API is used to Authenticate the user which allow user to enters into the web site if it is true otherwise not.
    if(isAuthenticated){
        return <Navigate to='/'/>//this Navigate componant is redirect user to the home page if the user is logged in.
    }


  return (
     //The Login page is design with the help of already built componants from Chakra UI which made the web page easy to understand for the user. 
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