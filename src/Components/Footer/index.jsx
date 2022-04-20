import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bgColor="pink.400" py={4} color="white" textAlign="center">
            <Container maxW={1200}>
                <Text> &copy; Muhammad Ridwan | 2022 - present</Text>
            </Container>
        </Box>
    );
};

export default Footer;
