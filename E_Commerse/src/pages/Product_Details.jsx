import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {Box, Button, Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Text, HStack,} from "@chakra-ui/react";
import LoadingIndicator from "../Componants/LodingIndicator";
import ErrorIndicator from "../Componants/ErrorIndicator";

export default function TicketView() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [err, setErr] = useState(false);

  async function fetchAndUpdateData(id) {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`,
      });

      let data = res?.data;
      setLoading(false);
      setProduct(data);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(id);
  }, [id]);

  

  if (loading) {
    return <LoadingIndicator />;
  }

  if (err) {
    return <ErrorIndicator />;
  }

  const { brand, title,image, category,price } = product;
  return (
    <>
      <Card>
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
              <Text pt="2" fontSize="sm">
                {image}
              </Text>
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
          
        </CardFooter>
      </Card>
    </>
  );
}