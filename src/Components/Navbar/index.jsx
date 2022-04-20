import { Box, Text, Container, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import NavItems from "./NavItems";

const Navbar = () => {
    return (
        <Box bgColor="pink.400" color="white">
            <Container maxW={1200} py={4} display="flex" justifyContent="space-between">
                <Heading as="h6" fontSize={20}>
                    Ridwan's Summary
                </Heading>
                <Box>
                    <UnorderedList listStyleType="none" display="flex">
                        <NavItems text="Home" path="/" />
                        <NavItems text="Summary" path="/summary" />
                        <NavItems text="About" path="/about" />
                    </UnorderedList>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
