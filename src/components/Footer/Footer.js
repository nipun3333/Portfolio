import { HStack } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebookF, FaSpotify, FaGoogle } from 'react-icons/fa'
import { VscGithubInverted } from 'react-icons/vsc'
import Icon from '@chakra-ui/icon'


function Footer() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)")
    return (
        <HStack spacing="8" p={10}>
            <Icon as={FaLinkedin} boxSize={isNotSmallerScreen ? "35" : "25"} />
            <Icon as={FaInstagram} boxSize={isNotSmallerScreen ? "35" : "25"} />
            <Icon as={FaFacebookF} boxSize={isNotSmallerScreen ? "35" : "25"} />
            <Icon as={VscGithubInverted} boxSize={isNotSmallerScreen ? "35" : "25"} />
        </HStack>
    )
}

export default Footer