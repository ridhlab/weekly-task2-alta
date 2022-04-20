import styles from "./NavItems.module.css";
import { ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItems = ({ text, path }) => {
    return (
        <ListItem mx={2}>
            <NavLink to={path} className={({ isActive }) => isActive && styles.linkActive}>
                <Text _hover={{ color: "#4b0082" }}>{text}</Text>
            </NavLink>
        </ListItem>
    );
};

export default NavItems;
