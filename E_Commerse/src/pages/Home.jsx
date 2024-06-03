import React from 'react'
import{useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'
import LoadingIndicator from '../Componants/LodingIndicator'
import ErrorIndicator from '../Componants/ErrorIndicator'
import {Button, Container,Spinner, Flex, SimpleGrid, Select, HStack,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DataCard from '../Componants/dataCard'


const Home = () => {
    const navigate = useNavigate()
    const[sortOrder, setSortOrder] = useState("asc");
    const[loading, setLoading] = useState(false);
    const[err, setError] = useState(false);
    const[Data, setData] = useState([]);
    const[filterValue, setFilterValue] = useState("");



    async function getData(sortOrder, filterValue){
        setLoading(true)
        try {
            // let queryParams = {};
            // if(filterValue){
            //     queryParams.category = filterValue;
            // };

            // if(sortOrder){
            //     queryParams.sort = "price";
            //     queryParams.order = sortOrder;
            // }
            let resp = await axios({
                method:"get",
                url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${filterValue}&page=1&limit=5&sort=price&order=${sortOrder}`,
            }); 
            setLoading(false);
            setData(resp.data.data)
            
            console.log(Data)
            
        } catch (error) {
            setLoading(false)
            setError(true)
            
        }
    }
    useEffect(()=>{
        getData(sortOrder, filterValue)
    },[sortOrder, filterValue])

    if(loading){
        return <LoadingIndicator/>
    };

    if(err){
        return <ErrorIndicator/>
    };


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
     
        <HStack spacing={3} my={4}>
            <Select
                bgColor='gray.400'
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
                bgColor='gray.400'
                placeholder="Filter by Category"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="homedecor">Home Decor</option>
            </Select>
        
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