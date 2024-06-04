//imported the libraries as per the requirments.
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Box, Button, Card, Image, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Text, HStack,  AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,} from "@chakra-ui/react";
import LoadingIndicator from "../Componants/LodingIndicator";
import ErrorIndicator from "../Componants/ErrorIndicator";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';

export default function Product_Details() {
  const { id } = useParams();   //useParams is used to get and store the product id here.
  const [loading, setLoading] = useState(false);//this state is used to store the loading status.
  const [product, setProduct] = useState({});//this state is used to store the unique product by id.
  const [err, setErr] = useState(false);//this state is used to store the error status.


  //function handleCart is ised to show an alert message whic has two buttons that cinfrim and cancal on click event.
  function handleCart() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    //The Product details page is design with the help of already built componants from Chakra UI which made the web page easier to understand for the user. 
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Modal content goes here */}
              Hello, I'm a modal!
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    
  }

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
            <Button
                variant="outline"
                colorScheme="red"
                onClick={handleCart}
            >
                Add to cart
            </Button>
        </CardFooter>
      </Card>
    </>
  );
}