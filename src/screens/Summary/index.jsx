import { Box } from "@chakra-ui/react";
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
