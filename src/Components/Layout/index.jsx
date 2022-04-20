import Navbar from "../Navbar";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Container maxW={1200}>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default Layout;
