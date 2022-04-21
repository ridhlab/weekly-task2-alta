import styles from "./style.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";
/* Logo */
import AlterraLogo from "../../assets/img/alterra-academy.png";
import KampusMerdekaLogo from "../../assets/img/kampus-merdeka.png";
import ReactLogo from "../../assets/img/react-logo.png";
import ChakraLogo from "../../assets/img/chakra-logo.png";

const About = () => {
    return (
        <Box py={32}>
            <Flex justifyContent="center">
                <Flex alignItems="center" mx={4}>
                    <img src={AlterraLogo} alt="logo-alterra" width={164} />
                </Flex>
                <Flex alignItems="center" mx={4}>
                    <img src={KampusMerdekaLogo} alt="logo-kampus-merdeka" width={164} />
                </Flex>
            </Flex>
            <Box my={4}>
                <Text textAlign="center" fontWeight={500}>
                    Tech Stack
                </Text>
                <Flex justifyContent="center" my={2}>
                    <Flex alignItems="center" mx={4}>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            <img src={ReactLogo} alt="logo-react" width={100} />
                        </a>
                    </Flex>
                    <Flex alignItems="center" mx={4}>
                        <a href="https://chakra-ui.com/" target="_blank" rel="noopener noreferrer">
                            <img src={ChakraLogo} alt="logo-chakra" width={100} />
                        </a>
                    </Flex>
                </Flex>
            </Box>
            <Box textAlign="center">
                <Text>
                    Visit{" "}
                    <a href="https://github.com/ridlwan17/weekly-task2-alta" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        sourcecode
                    </a>
                </Text>
            </Box>
        </Box>
    );
};

export default About;
