import styles from "./style.module.css";
import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bgColor="primary" py={4} color="white" textAlign="center">
            <Container maxW={1200}>
                <Text>
                    &copy;{" "}
                    <a href="https://www.github.com/ridlwan17" target="_blank" rel="noopener noreferrer" className={styles.linkFooter}>
                        Muhammad Ridwan
                    </a>{" "}
                    | 2022 - present
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;
