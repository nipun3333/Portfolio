import React from 'react'
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import './web.css'

function web() {
    return (
        <Flex w="100%">
            <div className="web-option">
                    <a href="#education">
                        <Text fontSize="1xl" fontWeight="bold"> <i className="fi-rr-book-alt option-icon"> Education </i> </Text>
                    </a>
                </div>
            <div className="web-option">
                <a href="#skills">
                    <Text fontSize="1xl" fontWeight="bold"> <i className="fi-rr-laptop option-icon"> Skills</i> </Text>
                </a>
            </div>
            <div className="web-option">
                <a href="#projects">
                    <Text fontSize="1xl" fontWeight="bold"> <i className="fi-rr-pencil option-icon"> Projects </i> </Text>
                </a>
            </div>
            <div className="web-option">
                <a href="#achievements">
                    <Text fontSize="1xl" fontWeight="bold"> <i className="fi-rr-trophy option-icon"> Achievements</i> </Text>
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <Text fontSize="1xl" fontWeight="bold"> <i className="fi-rr-user option-icon"> Contact</i> </Text>
                </a>
            </div>
        </Flex>
    )
}

export default web
