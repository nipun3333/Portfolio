import React from 'react'
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import './mobile.css'

function mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i className="fi-rr-cross"></i>
            </div>
            <div className="mobile-options" onClick={() => setIsOpen(!isOpen)}>
                <div className="mobile-option">
                    <a href="#education">
                        <Text fontSize="2xl" fontWeight="bold"> <i className="fi-rr-book-alt option-icon"> Education </i> </Text>
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                        <Text fontSize="2xl" fontWeight="bold"> <i className="fi-rr-laptop option-icon"> Skills</i> </Text>
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#projects">
                        <Text fontSize="2xl" fontWeight="bold"> <i className="fi-rr-pencil option-icon"> Projects </i> </Text>
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#achievements">
                        <Text fontSize="2xl" fontWeight="bold"> <i className="fi-rr-trophy option-icon"> Achievements</i> </Text>
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <Text fontSize="2xl" fontWeight="bold"> <i className="fi-rr-user option-icon"> Contact</i> </Text>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default mobile
