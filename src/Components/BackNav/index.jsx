import { Box, Flex } from "@chakra-ui/react";
import { TiArrowBack } from "react-icons/ti";

const BackNav = () => {
    return (
        <Box alignItems="center" display="inline-block" _hover={{ color: "primary" }}>
            <Flex alignItems="center">
                <TiArrowBack />
                Kembali
            </Flex>
        </Box>
    );
};

export default BackNav;
