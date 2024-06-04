import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    border,
    useToast,
    useDisclosure,
    Button,
  
  } from '@chakra-ui/react'
  import React from 'react'


export function AlertDialogExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()

    function HandleToast(){
        toast({
                                  title: 'Status',
                                  description: "Item added to cart",
                                  status: 'success',
                                  duration: 2000,
                                  isClosable: true,
                                }),
                                setTimeout(()=>{

                                })
    }
  
    return (
      <>
        <Button colorScheme='green'variant="outline" onClick={onOpen}>
          Add to Cart
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Please Confirm
              </AlertDialogHeader>
  
              <AlertDialogBody>
              Are you sure you want to add this item to cart
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} colorScheme='green' onClick={HandleToast}>
                  Confirm
                </Button>
                <Button colorScheme='red' onClick={onClose} ml={3}>
                  Cancal
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }
