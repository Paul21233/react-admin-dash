import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/lineChart";

const Line = () => {
    return(
        <Box m="20px">
            <Header title="PIE CHART" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    );
}

export default Line;