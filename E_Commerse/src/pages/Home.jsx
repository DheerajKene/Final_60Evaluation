//imported the libraries as per the requirments.
import { useParams } from "react-router-dom";
import React from 'react'
import{useState, useEffect, useContext} from 'react'
import axios from 'axios'
import './Home.css'
import LoadingIndicator from '../Componants/LodingIndicator'
import ErrorIndicator from '../Componants/ErrorIndicator'
import {Button, Container,Spinner, Flex, SimpleGrid, Select, HStack,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DataCard from '../Componants/dataCard'
import { AuthContext } from '../Context/AuthContext'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'


const Home = () => {
    const navigate = useNavigate()   //to redirect onto the page.
    const[sortOrder, setSortOrder] = useState(""); //to store the order value taken from the user by select tag.
    const[loading, setLoading] = useState(false);  //to manage the loading state.
    const[err, setError] = useState(false);    //to manage the error state.
    const[Data, setData] = useState([]);   //to store the fetched data from api. 
    const[filterValue, setFilterValue] = useState("");  //to store the filter value taken from the user by select tag.
    const{logout} = useContext(AuthContext);  //logout function retrived from the context by using useContext.


//function getData helps to fetch the data from the given api.
    async function getData(sortOrder, filterValue){
        setLoading(true)

        //params term ia an object inwhich the sort value and filter value are stored and this object is accepted by the axios in get method to fetch the data accordingly.
        try {
            let queryParams = {};
            if(filterValue){
                queryParams.filter = filterValue;
            };

            if(sortOrder){
                queryParams.sort = "price";
                queryParams.order = sortOrder;
            }
            let resp = await axios({
                method:"get",
                url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`,
                params: queryParams,
            }); 
            
            setLoading(false);
            setData(resp.data.data)
            
        } catch (error) {
            setLoading(false)
            setError(true)
            
        }
    }

    //useeffect hook helps to fetch the data as soon as the page load.(mount phase)
    useEffect(()=>{
        getData(sortOrder, filterValue)
    },[sortOrder, filterValue])

    if(loading){
        return <LoadingIndicator/>//if the loading states is true it calls the loadingIndicator function which shows the loading icon onto the web page.
    };

    if(err){
        return <ErrorIndicator/> //if the loading states is true it calls the loadingIndicator function which shows the error message onto the web page.
    };

   

  return (
    //The Home page is design with the help of already built componants from Chakra UI which made the web page easy to understand for the user. 
    <Container maxW="container.md">
     
        <HStack spacing={3} my={4}>
            <Select
                placeholder="Sort by Price"
                value={sortOrder}
                onChange={(e) => {
                    setSortOrder(e.target.value);
                }}
            >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
            </Select>
            <Select
                
                placeholder="Filter by Category"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="homedecor">Home Decor</option>
            </Select>
        
            <Button onClick={logout} colorScheme='red' variant='outline'> 
                Logout
            </Button>
           
        
        </HStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {Data?.map((data) => (
                <DataCard {...data} key={data.id}/>
                ))}
            </SimpleGrid>
    </Container>
  )
}

export default Home