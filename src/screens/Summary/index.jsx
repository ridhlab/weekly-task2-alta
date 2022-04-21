import styles from "./style.module.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import KampusMerdekaLogo from "../../assets/img/kampus-merdeka.png";
import { Link } from "react-router-dom";

const Summary = () => {
    return (
        <Box py={4}>
            <Flex display={{ base: "block", sm: "flex" }} p={4} boxShadow="0px 2px 15px -9px rgb(0 0 0 / 75%);" borderRadius={8}>
                <Flex alignItems="center">
                    <img src={KampusMerdekaLogo} alt="logo-kampus-merdeka" width={76} />
                </Flex>
                <Box mx={{ base: 0, sm: 4 }}>
                    <Text fontSize={20} fontWeight={500}>
                        Section 1 - Introduction Git
                    </Text>
                    <Link to="summary/1" className={styles.linkDetail}>
                        View Detail
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
};

export default Summary;
