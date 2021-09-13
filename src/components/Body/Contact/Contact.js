import React, {useState} from 'react'
import './Contact.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea
  } from "@chakra-ui/react"
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import {Button} from '@chakra-ui/button'
import emailjs from 'emailjs-com'
function Contact() {

    function emailsend(e){
        e.preventDefault();

        emailjs.sendForm(
         'service_ccx9bhq', 'template_vnso3zu', e.target, 'user_SFZw5AJigHFuHOJlKPKwT'
            ).then(res=>{
                console.log(res);
            }).catch(err => console.log(err))
        
            setcontact({
                name: '',
                email: '',
                message: ''
            })
    }

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"; 

    const [contact, setcontact] = useState({
        name: '',
        email: '',
        message: ''
    })


    // const handleEmailSend = () =>{
    //     // e.preventDefault();
        
    //     setcontact({
    //         name: '',
    //         email: '',
    //         message: ''
    //     })
    // }

    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    return (
        <div className="contact">
            <Flex direction="column" 
                spacing="200px" p={isNotSmallerScreen ? "50" : "0"} 
                alignSelf="flex-start">
                <Box mt = {isNotSmallerScreen ? "0" : "16"} align={isNotSmallerScreen ? "flex-start" : "center"}>
                    <Text fontSize="40" fontWeight="semibold" align="center" color={isDark ? "blue.400" : "blue.600"}><i className="fi-rr-smartphone"></i> Contact </Text>
                </Box>
                <hr className="lineEdu"/>
                {/* <FormControl id="first-name" isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder="First name" />
                </FormControl> */}
                <Box my={4} textAlign="left">
                    <form onSubmit={emailsend}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="name" name="name" value={contact.name} onChange={(e) => {setcontact({...contact, name: e.target.value})}}/>
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="email@email.com" name="email" value={contact.email} onChange={(e) => {setcontact({...contact, email: e.target.value})}}/>
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Message</FormLabel>
                            <Textarea placeholder="message" name="message" value={contact.message} onChange={(e) => {setcontact({...contact, message: e.target.value})}} />
                        </FormControl>
                        <Button mt={8} colorScheme="blue" type="submit" 
                        // onClick={handleEmailSend}
                        >
                        Send
                        </Button>
                    </form>
                </Box>
            </Flex>
        </div>
    )
}

export default Contact
