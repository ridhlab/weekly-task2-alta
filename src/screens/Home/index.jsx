import styles from "./style.module.css";
import StudentImg from "../../assets/img/student-time-management.png";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box>
            <Box textAlign="center" my={8}>
                <Heading as="h6" fontSize={24}>
                    Alterra Academy - How to be an Ideal Top Search ReactJS Front End Engineer
                </Heading>
                <Text mt={2}>Moh. Ridwan | React Kelas A</Text>
            </Box>
            <Box my={8}>
                <img src={StudentImg} width={536} alt="learning" className={styles.heroImg} />
            </Box>
            <Flex my={8} justifyContent="center" color="white">
                <Link to="/summary" className={styles.link}>
                    <Flex alignItems="center" backgroundColor="pink.400" borderRadius={100} py={2} px={4} _hover={{ bgColor: "pink.500" }}>
                        <Text>Explore Summary</Text>
                        <button className={styles.buttonExplore}>
                            <BsPlayFill size={20} />
                        </button>
                    </Flex>
                </Link>
            </Flex>
        </Box>
    );
};

export default Home;
