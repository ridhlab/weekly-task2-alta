import { useEffect, useState } from "react";
import { Box, Container, Heading, UnorderedList, Collapse, useDisclosure } from "@chakra-ui/react";
import NavItems from "./NavItems";
import Hamburger from "./Hamburger";

import { useWinddowWidth } from "../../hooks/windowWidth";

const Navbar = () => {
    const [isHbgActive, setisHbgActive] = useState(false);
    const { isOpen, onToggle } = useDisclosure();

    const { windowWidth } = useWinddowWidth();

    const handleClickHbg = () => {
        setisHbgActive(!isHbgActive);
        onToggle();
    };

    return (
        <>
            <Box bgColor="primary" color="white">
                <Container maxW={1200} py={4} display="flex" justifyContent="space-between">
                    <Heading as="h6" fontSize={20}>
                        Ridwan's Summary
                    </Heading>
                    <Box>
                        <UnorderedList listStyleType="none" display={{ base: "none", sm: "flex" }}>
                            <NavItems text="Home" path="/" windowWidth={windowWidth} />
                            <NavItems text="Summary" path="/summary" windowWidth={windowWidth} />
                            <NavItems text="About" path="/about" windowWidth={windowWidth} />
                        </UnorderedList>
                        <Hamburger isHbgActive={isHbgActive} setisHbgActive={setisHbgActive} handleClickHbg={handleClickHbg} />
                    </Box>
                </Container>
            </Box>
            {windowWidth < 480 && (
                <Collapse in={isOpen} animateOpacity>
                    <UnorderedList listStyleType="none" display="block" m="0" bgColor="gray.200" p={2}>
                        <NavItems text="Home" path="/" pb={1} isHbgActive={isHbgActive} windowWidth={windowWidth} />
                        <Box height=".5px" bgColor="white" />
                        <NavItems text="Summary" path="/summary" pb={1} isHbgActive={isHbgActive} windowWidth={windowWidth} />
                        <Box height=".5px" bgColor="white" />
                        <NavItems text="About" path="/about" pb={1} isHbgActive={isHbgActive} windowWidth={windowWidth} />
                    </UnorderedList>
                </Collapse>
            )}
        </>
    );
};

export default Navbar;
