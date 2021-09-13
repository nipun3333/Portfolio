import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import React from 'react'
import './Achievements.css'
import {FaExternalLinkAlt} from "react-icons/fa";
import Icon from '@chakra-ui/icon'
import { VscGithubInverted } from 'react-icons/vsc'

function Achievements() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"; 

    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    return (
        <div className="achievements">
            <Flex direction="column" 
                spacing="200px" p={isNotSmallerScreen ? "50" : "0"} 
                alignSelf="flex-start">
                <Box mt = {isNotSmallerScreen ? "0" : "16"} align={isNotSmallerScreen ? "flex-start" : "center"}>
                    <Text fontSize="40" fontWeight="semibold" align="center" color={isDark ? "blue.400" : "blue.600"}><i className="fi-rr-graduation-cap"></i> Achievements </Text>
                </Box>
                <hr className="lineEdu"/>
                <Flex direction="column" p="50" alignSelf="flex-start">
                    {/* <Flex direction="row" align="center"> */}
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                            Winner of W.M.C. 2.0 (Website Making Challenge)
                        <a href="https://unified-club-portal.netlify.app/"><Icon as={FaExternalLinkAlt} ml={5} boxSize="25" /></a>
                        <a href="https://github.com/tirthPatel177/unified-club-portal"><Icon as={VscGithubInverted} ml={5} boxSize="25" /></a>
                        </Text>
                    {/* </Flex> */}
                    <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                        We had to make a website in 1 month for the competition in groups of 2 and our group won the first prize in the Unified Club Portal category.
                    </Text>
                </Flex>
                <Flex direction="column" p="50" alignSelf="flex-start">
                    {/* <Flex direction="row" align="center"> */}
                        <Text fontSize="25" fontWeight="bold" color={isDark ? "red.200" : "red.400"}>
                            <a href="https://codeforces.com/profile/nsp3333">Codeforces</a>&emsp;&emsp;<a href="https://www.codechef.com/users/nipun3333">CodeChef</a>&emsp;&emsp;<a href="https://www.hackerrank.com/nipunpatel3333">HackerRank</a>&emsp;&emsp;<a href="https://auth.geeksforgeeks.org/user/nipunpatel3333/practice/">GeeksForGeeks</a>&emsp;&emsp;<a href="https://leetcode.com/nipunpatel3333/">LeetCode</a> 
                        </Text>
                        
                    {/* </Flex> */}
                    <Text fontSize="18" fontWeight="bold" color={isDark ? "gray.200" : "gray.450"}>
                        I am a 4 star in Codechef, maximum rating of 1381 in CodeForces. I have solved more than 400 questions from various platforms. 
                    </Text>
                </Flex>
            </Flex>
        </div>
    )
}

export default Achievements