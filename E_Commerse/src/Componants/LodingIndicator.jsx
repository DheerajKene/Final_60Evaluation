//imported the libraries as per the requirments.
import { Spinner } from "@chakra-ui/react";

//function LoadingIndicator is used to show the Loading message(spinner from Chakra UI) message into the UI if the three is error while fetching the data.
export default function LoadingIndicator() {
       //this function is invoked when the loading status is true.
    //componants design with help of Chakra UI.
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
}