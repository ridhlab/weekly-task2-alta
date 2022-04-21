import styles from "./NavItems.module.css";
import { ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItems = ({ text, path, pb, isHbgActive, windowWidth }) => {
    return (
        <ListItem mx={2} pb={pb} textAlign="center">
            <NavLink
                to={path}
                className={({ isActive }) => (isActive && !isHbgActive ? styles.linkActive : isActive && isHbgActive ? styles.linkActiveHbg : "")}
            >
                <Text display="inline" _hover={{ color: windowWidth < 480 ? "primary" : "oppositePrimary" }}>
                    {text}
                </Text>
            </NavLink>
        </ListItem>
    );
};

export default NavItems;
