import { React, useState } from 'react'
import { Flex, Heading, VStack, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Spacer, useColorMode } from "@chakra-ui/react";
import './Navbar.css';
import Web from './web/web'
import Mobile from './mobile/mobile'
import Appicon from './Appicon'

function Navbar() {

    const {colorMode, toggleColorMode } = useColorMode(); 
    const isDark = colorMode === "dark"; 

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header">
            {/* <Text className="logo" fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
                Nipun Patel
            </Text> */}
            <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode} ></IconButton>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                    {!isOpen && <Appicon isOpen={isOpen} setIsOpen={setIsOpen} />}
                    
                </div>
            </div>
        </div>


        // {/* <Flex w="100%">
        //     <Spacer></Spacer>
        //     <IconButton icon={<FaLinkedin/>} isRound="true" onClick={toggleColorMode} ></IconButton>
        //     <IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={toggleColorMode} ></IconButton>
        //     <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={toggleColorMode} ></IconButton>
        //     <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode} ></IconButton>
        // </Flex> */}
        
    )
}

export default Navbar
