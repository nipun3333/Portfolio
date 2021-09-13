import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import React from 'react'
import './Projects.css'
import { Image } from '@chakra-ui/image'
import {FaExternalLinkAlt} from "react-icons/fa";
import Icon from '@chakra-ui/icon'
import { VscGithubInverted } from 'react-icons/vsc'
import ucp from './imgs/ucp.PNG'
import sre from './imgs/sre.PNG'
import bms from './imgs/bms.PNG'
function Projects() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"; 

    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    const [isNotSmallerScreen1] = useMediaQuery("(min-width:1170px)");
    return (
        <div className="projects">
            <Flex direction="column" 
                spacing="200px" p={isNotSmallerScreen ? "50" : "0"} 
                alignSelf="flex-start">
                <Box mt = {isNotSmallerScreen ? "0" : "16"} align={isNotSmallerScreen ? "flex-start" : "center"}>
                    <Text fontSize="40" fontWeight="semibold" align="center" color={isDark ? "blue.400" : "blue.600"}><i className="fi-rr-edit"></i> Projects </Text>
                </Box>
                <hr className="lineEdu"/>
                <Flex p={isNotSmallerScreen ? "50" : "0"} className="whole-projects" wrap="wrap"
                spacing="200px" align="center">
                    {/* <Flex direction="column" className="flx-grd" align="center"> */}
                    <div className="box-proj">
                        <Box className="grd-proj" align="center">
                            <Image alignSelf="center"
                                className = "image-pr"
                                backgroundColor="transparent"
                                src={ucp} />
                            <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                                Unified Club Portal
                            </Text>
                            <Text fontSize="20" fontWeight="bold">
                                <a href="https://unified-club-portal.netlify.app/"><Icon as={FaExternalLinkAlt} ml={5} boxSize="25" /></a>
                                <a href="https://github.com/tirthPatel177/unified-club-portal"><Icon as={VscGithubInverted} ml={5} boxSize="25" /></a>
                            </Text>
                        </Box>
                    </div>
                    <div className="box-proj">
                        <Box className="grd-proj" align="center">
                            <Image alignSelf="center"
                                className = "image-pr"
                                backgroundColor="transparent"
                                src={sre} />
                            <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                                Shree ram Engineers
                            </Text>
                            <Text fontSize="20" fontWeight="bold">
                            <a href="https://shreeramengineers.azurewebsites.net/"><Icon as={FaExternalLinkAlt} ml={5} boxSize="25" /></a>
                            {/* <a href="https://github.com/nipun3333/website"><Icon as={VscGithubInverted} ml={5} boxSize="25" /></a> */}
                            </Text>
                        </Box>
                    </div>
                    <div className="box-proj">
                        <Box className="grd-proj" align="center">
                            <Image alignSelf="center"
                                className = "image-pr"
                                backgroundColor="transparent"
                                src={bms} />
                            <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                                Blog Management System
                            </Text>
                            <Text fontSize="20" fontWeight="bold">
                                <a href="https://github.com/nipun3333/Blog-Management-System-Nipun"><Icon as={VscGithubInverted} ml={5} boxSize="25" /></a>
                            </Text>                                

                        </Box>
                    </div>
                    <div className="box-proj">
                        <Box className="grd-proj" align="center">
                            <Image alignSelf="center"
                                className = "image-pr"
                                backgroundColor="transparent"
                                src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg" />
                            <Text fontSize="25" fontWeight="bold" color={isDark ? "green.200" : "green.400"}>
                                Unified Club Portal
                            </Text>
                            <Text fontSize="20" fontWeight="bold">
                                <a href="https://unified-club-portal.netlify.app/"><Icon as={FaExternalLinkAlt} ml={5} boxSize="25" /></a>
                                <a href="https://github.com/tirthPatel177/unified-club-portal"><Icon as={VscGithubInverted} ml={5} boxSize="25" /></a>
                            </Text>
                        </Box>
                    </div>
                    {/* </Flex> */}
                    
                </Flex>
            </Flex>
        </div>
    )
}

export default Projects
