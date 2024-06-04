//imported the libraries as per the requirments.
import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'


  //function ErrorIndicator is used to show the error message into the UI if the three is error while fetching the data.
const ErrorIndicator = () => {
  return (
    //this function is invoked when the error status is true.
    //componants design with help of Chakra UI.
    <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Somthing went wrong..!</AlertDescription>
    </Alert>
  )
}

export default ErrorIndicator