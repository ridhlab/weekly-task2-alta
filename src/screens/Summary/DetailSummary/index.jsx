import styles from "./style.module.css";
import { Box, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import BackNav from "../../../Components/BackNav";

const DetailSummary = () => {
    const { summary } = useLocation().state;
    const { id: sectionId, title, points, task } = summary;

    return (
        <Box py={4}>
            <Box>
                <Link to="/summary">
                    <BackNav />
                </Link>
            </Box>
            <Box>
                <Text fontWeight={500} fontSize={28} my={4}>
                    Summary Section {sectionId} - {title}
                </Text>
                <Text>
                    Click{" "}
                    <a href={task.link} target="_blank" rel="noreferrer" className={styles.link}>
                        here{" "}
                    </a>
                    to visit task
                </Text>
                {points.map((point, id) => (
                    <Box key={point.id} my={4} p={4} border="1px solid #999" borderRadius={8}>
                        <Text fontWeight={500} fontSize={24}>
                            {point.pointTitle}
                        </Text>
                        {typeof point.pointDesc === "object" ? (
                            point.pointDesc.map((subPoint, id) => (
                                <Box key={subPoint.id} my={2}>
                                    <Text fontWeight={500} fontSize={20}>
                                        {subPoint.subPointTitle}
                                    </Text>
                                    <Text>{subPoint.subPointDesc}</Text>
                                </Box>
                            ))
                        ) : (
                            <Text>{point.pointDesc}</Text>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default DetailSummary;
