import { Box } from "@chakra-ui/react";

const Hamburger = ({ isHbgActive, handleClickHbg }) => {
    return (
        <Box display={{ base: "block", sm: "none" }} cursor="pointer" transition=".5s ease-in-out" onClick={() => handleClickHbg()}>
            <Box
                w={10}
                h={1}
                position="relative"
                left={() => (isHbgActive ? "2px" : "")}
                bgColor="white"
                borderRadius={4}
                my={1}
                transform={() => (isHbgActive ? "rotate(45deg) translate(8px, 4px)" : "rotate(0deg)")}
                transition=".2s ease-in-out"
            />
            <Box w={10} h={1} bgColor="white" borderRadius={4} my={1} opacity={() => (isHbgActive ? "0" : "100")} transition="opacity .2s ease-in-out" />
            <Box
                w={10}
                h={1}
                position="relative"
                top={() => (isHbgActive ? "-5px" : "")}
                right={() => (isHbgActive ? "4px" : "")}
                bgColor="white"
                borderRadius={4}
                my={1}
                transform={() => (isHbgActive ? "rotate(-45deg) translate(8px, 4px)" : "rotate(0deg)")}
                transition=".2s ease-in-out"
            />
        </Box>
    );
};

export default Hamburger;
