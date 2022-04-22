import styles from "./style.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import KampusMerdekaLogo from "../../assets/img/kampus-merdeka.png";

const CardSection = ({ summary }) => {
    const { id: sectionId, title } = summary;
    return (
        <Flex display={{ base: "block", sm: "flex" }} p={4} boxShadow="0px 2px 15px -9px rgb(0 0 0 / 75%);" borderRadius={8}>
            <Flex alignItems="center">
                <img src={KampusMerdekaLogo} alt="logo-kampus-merdeka" width={76} />
            </Flex>
            <Box mx={{ base: 0, sm: 4 }}>
                <Text fontSize={20} fontWeight={500}>
                    Section {sectionId} - {title}
                </Text>
                <Link to={`/summary/${sectionId}`} state={{ summary }} className={styles.linkDetail}>
                    View Detail
                </Link>
            </Box>
        </Flex>
    );
};

export default CardSection;
