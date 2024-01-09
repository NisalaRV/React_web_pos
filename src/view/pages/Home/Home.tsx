import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import Header from "../../common/Header";


const theme = createTheme({
    palette: {
        background: {
            paper: "#fff",
        },
        text: {
            primary: "#173A5E",
            secondary: "#46505A",
        },
        action: {
            active: "#001E3C",
        },
    },
});

export default function Home() {
    return (
        <>
          <Header/>
            <Box sx={{ width: "100%" }} mt={5}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    <div style={{ flex: "0 1 calc(25% - 12px)", margin: "6px" }}>
                        <ThemeProvider theme={theme}>
                            <Box
                                sx={{
                                    bgcolor: "background.paper",
                                    boxShadow: 2,
                                    borderRadius: 2,
                                    p: 2,
                                    minWidth: 180,
                                }}
                            >
                                <Box sx={{ color: "text.secondary" }}>Customer Count</Box>
                                <Box
                                    id="txtCustomerCount"
                                    sx={{
                                        color: "text.primary",
                                        fontSize: 34,
                                        fontWeight: "medium",
                                    }}
                                >
                                    0
                                </Box>
                                <Box
                                    id="txtCustomerCountPracentage"
                                    sx={{
                                        color: "success.dark",
                                        display: "inline",
                                        fontWeight: "bold",
                                        mx: 0.5,
                                        fontSize: 14,
                                    }}
                                >
                                    +18.77%
                                </Box>
                                <Box
                                    sx={{
                                        color: "text.secondary",
                                        display: "inline",
                                        fontSize: 14,
                                    }}
                                >
                                    vs. last week
                                </Box>
                            </Box>
                        </ThemeProvider>
                    </div>
                    {/* Repeat the above structure for the other grid items */}
                    {/* ... */}
                    <div style={{ flex: "0 1 calc(25% - 12px)", margin: "6px" }}>
                        <ThemeProvider theme={theme}>
                            <Box
                                sx={{
                                    bgcolor: "background.paper",
                                    boxShadow: 2,
                                    borderRadius: 2,
                                    p: 2,
                                    minWidth: 180,
                                }}
                            >
                                <Box sx={{ color: "text.secondary" }}>Order Count</Box>
                                <SettingsIcon sx={{ fontSize: 34, padding: 1 }} />
                            </Box>
                        </ThemeProvider>
                    </div>
                </div>
            </Box>
        </>
    );
}
