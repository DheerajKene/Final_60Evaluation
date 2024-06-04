//imported the libraries as per the requirments.
import React from 'react'
import {Box, Button, Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


  //function DataCard is used to show the data into the UI.
const DataCard = ({id, title, category, price}) => {   //destructuring the requird elements to show.
    const navigate = useNavigate() //Navigate hook is used to store the navigate status here.
  return (
    //The Product details page is design with the help of already built componants from Chakra UI which made the web page easier to understand for the user.
    <Card>
        <CardHeader>
            <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
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
                onClick={() => {
                navigate(`/Product/${id}`);//this navigte hook redirect user to the product details page.
                }}
            >
                More details
            </Button>
        </CardFooter>
  </Card>
  )
}

export default DataCard