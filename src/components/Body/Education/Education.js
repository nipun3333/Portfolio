import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import React from 'react'
import './Education.css'


function Education() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"; 

    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    return (
        <div className="education">
            <Flex direction="column" 
                spacing="200px" p={isNotSmallerScreen ? "50" : "0"} 
                alignSelf="flex-start">
                <Box mt = {isNotSmallerScreen ? "0" : "16"} align={isNotSmallerScreen ? "flex-start" : "center"}>
                    <Text fontSize="40" fontWeight="semibold" align="center" color={isDark ? "blue.400" : "blue.600"}><i className="fi-rr-graduation-cap"></i> Education </Text>
                </Box>
                <hr className="lineEdu"/>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} 
                spacing="200px" p={isNotSmallerScreen ? "50" : "0"} 
                alignSelf="flex-start">
                    <Box mt = {isNotSmallerScreen ? "0" : "16"} mr={isNotSmallerScreen ? "32" : "0"} align={isNotSmallerScreen ? "flex-start" : "center"} >
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            Secondary and Higher Secondary Education
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            SSC: K R Raval School, Ahmedabad
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            HSC: Sahjanand School of Achiever, Gandhinagar
                        </Text>
                        <br />
                        <Text fontSize="1xl" color={isDark ? "gray.200" : "gray.500"}>
                            I have completed my secondary and higher secondary schooling with gujarat state board in gujarati medium.
                        </Text>
                    </Box>
                    <Box mt = {isNotSmallerScreen ? "0" : "16"} align={isNotSmallerScreen ? "flex-start" : "center"} >
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            BTech Computer Science & Engineering
                        </Text>
                        <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                            School of Engineering and Applied Science, Ahmedabad University
                        </Text>
                        <br />
                        <Text fontSize="1xl" color={isDark ? "gray.200" : "gray.500"}>
                            I am currently in 5th semester of B.Tech With CGPA 3.46/4 upto 4th semester.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </div>
    )
}

export default Education
