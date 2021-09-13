import { Flex, Heading, VStack } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Spacer, useColorMode } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
function App() {

  return (
    <VStack p={5}>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </VStack>
  );
}

export default App;
