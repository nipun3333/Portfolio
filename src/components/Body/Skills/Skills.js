import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import { Spacer } from "@chakra-ui/react"
import React from 'react'
import './Skills.css'

function Skills() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"; 

    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    return (
        <div className="skills">
            <Flex direction="column" 
                spacing="200px" p={isNotSmallerScreen ? "50" : "0"} 
                alignSelf="flex-start">
                <Box mt = {isNotSmallerScreen ? "0" : "16"} align={isNotSmallerScreen ? "flex-start" : "center"}>
                    <Text fontSize="40" fontWeight="semibold" align="center" color={isDark ? "blue.400" : "blue.600"}><i className="fi-rr-laptop"></i> Skills </Text>
                </Box>
                <hr className="lineEdu"/>
                <Flex p={isNotSmallerScreen ? "50" : "0"} className="whole-skill" wrap="wrap"
                spacing="200px" align="center">
                    <Flex direction="column" className="flx-grd" align="center">
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            Python
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            Intermediate
                        </Text>
                    </Flex>
                    <Flex direction="column" className="flx-grd" align="center">
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            C/C++
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            Intermediate
                        </Text>
                    </Flex>
                    <Flex direction="column" className="flx-grd" align="center">
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            Java
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            Intermediate
                        </Text>
                    </Flex>
                    <Flex direction="column" className="flx-grd" align="center">
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            HTML/CSS
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            Intermediate
                        </Text>
                    </Flex>
                    <Flex direction="column" className="flx-grd" align="center">
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            React
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            Beginner
                        </Text>
                    </Flex>
                    <Flex direction="column" className="flx-grd" align="center">
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            Javascript
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            Intermediate
                        </Text>
                    </Flex>
                    <Flex direction="column" className="flx-grd" align="center">
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            Django
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            Intermediate
                        </Text>
                    </Flex>
                    <Flex direction="column" className="flx-grd" align="center">
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            Flask
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            Intermediate
                        </Text>
                    </Flex>
                    <Flex direction="column" className="flx-grd" align="center">
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            Matlab
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            Beginner
                        </Text>
                    </Flex>
                    
                    
                </Flex>
            </Flex>
        </div>
    )
}

export default Skills
