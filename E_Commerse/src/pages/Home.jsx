import React from 'react'
import{useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'
import LoadingIndicator from '../Componants/LodingIndicator'
import ErrorIndicator from '../Componants/ErrorIndicator'
import {Button, Container, Flex, SimpleGrid, Select, HStack,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import dataCard from '../Componants/dataCard'


const Home = () => {
    const navigate = useNavigate()
    const[sortOrder, setSortOrder] = useState("")
    const root = document.getElementById("root")
    const container = document.getElementById("container")
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const[Data, setData] = useState();
    const [filterValue, setFilterValue] = useState("");



    async function getData(){
        setLoading(true)
        try {
            let resp = await axios({
                method:"get",
                url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
            }) 
            setLoading(false);
            setData(resp.data.data)
            
            console.log(Data)
        } catch (error) {
            setLoading(false)
            console.log(error)
            
        }
    }
useEffect(()=>{
    getData()
},[])


// function ShowData(Data){
//         container.innerHTML = null;
        
//         Data.forEach((ele, i)=>{
//             let productBox = document.createElement("div");
//             // let image = document.createElement("img");
//             // image.src = ele.image;

//             // let brand = document.createElement('h3');
//             // brand.innerHTML = ele.brand;

//             let title = document.createElement("h3");
//             title.innerHTML = ele.title;

//             let category = document.createElement('h5');
//             category.innerHTML = ele.category;

//             let price = document.createElement('h3');
//             price.innerHTML = `Price: ${ele.price}`;

//             productBox.append(title, category, price);
//             container.append(productBox);
//             root.append(container)
           

//         })
        
        
//     }
   

  return (
    <Container maxW="container.md">
      <Flex direction="row-reverse">
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => {
            navigate(`/Product`);
          }}
          marginY={8}
        >
          More details
        </Button>
      </Flex>
        <HStack spacing={4} my={4}>
            <Select
            placeholder="Sort by Priority"
            value={sortOrder}
            onChange={(e) => {
                setSortOrder(e.target.value);
            }}
            >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
            </Select>
            <Select
                placeholder="Filter by Status"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="home decor">Home Decor</option>
            </Select>
        
        </HStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {Data?.map((data) => (
                <dataCard {...data} key={data.id} />
                ))}
            </SimpleGrid>
    </Container>
  )
}

export default Home