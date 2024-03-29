import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors: {
        primary: "#ED64A6",
        oppositePrimary: "#4B0082",
        secondary: "#FFBE55",
    },
});

export default theme;
