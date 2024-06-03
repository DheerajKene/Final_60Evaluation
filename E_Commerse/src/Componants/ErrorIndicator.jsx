import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const ErrorIndicator = () => {
  return (
    <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Somthing went wrong..!</AlertDescription>
    </Alert>
  )
}

export default ErrorIndicator