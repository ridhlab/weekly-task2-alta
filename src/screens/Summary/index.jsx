import { useState } from "react";
import styles from "./style.module.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardSection from "../../Components/CardSection";
/* Data Summary */
import summaries from "../../data/summary";

const Summary = () => {
    return (
        <Box py={4}>
            {summaries.map((summary, id) => (
                <CardSection summary={summary} />
            ))}
        </Box>
    );
};

export default Summary;
