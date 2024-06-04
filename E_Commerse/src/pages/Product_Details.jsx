//imported the libraries as per the requirments.
import { useState, useEffect} from "react";
import { AlertDialogExample } from "../Componants/Alert";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Box, Button, Card, Image, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Text, HStack} from "@chakra-ui/react";
import LoadingIndicator from "../Componants/LodingIndicator";
import ErrorIndicator from "../Componants/ErrorIndicator";


export default function Product_Details() {
  const { id } = useParams();   //useParams is used to get and store the product id here.
  const [loading, setLoading] = useState(false);//this state is used to store the loading status.
  const [product, setProduct] = useState({});//this state is used to store the unique product by id.
  const [err, setErr] = useState(false);//this state is used to store the error status.
  

 //function getData helps to fetch the data from the given api with unique id.
  async function getData(id) {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`,
      });

      let data = res.data.data;
      console.log(data)
      setLoading(false);
      setProduct(data);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  }


   //useEffect hook helps to fetch the data as soon as the page load.(mount phase)
  useEffect(() => {
    getData(id);
  }, [id]);  //in dependancy array id is passed here.(Update lifecycle event)

  

  if (loading) {
    return <LoadingIndicator />;//if the loading states is true it calls the loadingIndicator function which shows the loading icon onto the web page.
  }

  if (err) {
    return <ErrorIndicator />;//if the loading states is true it calls the loadingIndicator function which shows the error message onto the web page.
  }

  const { brand, title, image, category, price } = product;  //the requird componant is destructure here to show into the UI.

   //The card details is design with the help of already built componants from Chakra UI which made the web page easy to understand for the user.
  return (
    <>
      <Card align="center" border="1px solid black">
        <CardHeader>
          <Heading size="md">{brand}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Title
              </Heading>
              <Text pt="2" fontSize="sm">
                {title}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
              </Heading>
            <Box>
                <Image src={image} alt='Dan Abramov' />
            </Box>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Category
              </Heading>
              <Text pt="2" fontSize="sm">
                {category}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Price
              </Heading>
              <Text pt="2" fontSize="sm">
                {price}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
            <AlertDialogExample/>
        </CardFooter>
      </Card>
      
    </>
  );
}