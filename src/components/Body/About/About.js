import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image'
import React from 'react';
import {Button} from '@chakra-ui/button'
import profile from './../../imgs/profile.jpeg'
import './About.css'

function About() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"; 

    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

    return (
        // <Flex direction="column">
        <>
            <div className="prof">
                <Stack>
                    <Flex direction={isNotSmallerScreen ? "row" : "column"} 
                        spacing="200px" p={isNotSmallerScreen ? "50" : "0"} 
                        alignSelf="flex-start">

                        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                            mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                            backgroundColor="transparent" boxShadow="lg" mr={15}
                            boxSize="300px" src={profile} />
                        <Box mt = {isNotSmallerScreen ? "0" : "16"} align={isNotSmallerScreen ? "flex-start" : "center"}>
                            <Text fontSize="5xl" fontWeight="semibold"> Hii, My self </Text>
                            <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Nipun Patel</Text>
                            <Text color={isDark ? "gray.200" : "gray.500"}>
                                Web Developer, Competitive Programmer, backend-development enthusiast
                            </Text>

                        

                        </Box>
                    </Flex>
                </Stack>
            </div>
            
            <Box mt = {isNotSmallerScreen ? "0" : "16"} align="center" >
                    <Text fontSize="40" fontWeight="semibold" color={isDark ? "blue.400" : "blue.600"}> <i className="fi-rr-mode-portrait"></i> About Me </Text>
                    <hr className="lineAbout"/>
                <div className="aboutMe">
                    <Text fontSize="1xl" color={isDark ? "gray.200" : "gray.500"} align="flex-start">
                        My name is Nipun. I am currently pursuing B.Tech in Computer Science and Engineering at Ahmedabad University.<br /> 
                        I have a major interest in Mathematics and Programming. I have experience in different programming languages, frameworks etc. I have used languages like Python, C, C++, Java etc. But I primarily code in Python. I have also experience in Django, Flask, React etc. I mainly prefer Django as the backend for creating stunning websites. I am a competitive programmer, and a full stack web developer.
                    </Text>
                </div>
            </Box>

    </>
        // {/* </Flex> */}
    )
}

export default About