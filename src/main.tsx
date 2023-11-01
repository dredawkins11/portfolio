import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
    CssBaseline,
    CssVarsProvider,
    GlobalStyles,
    extendTheme,
} from "@mui/joy";

const theme = extendTheme({
    fontFamily: {
        body: "'Urbanist', var(--joy-fontFamily-fallback)",
        display: "Urbanist, var(--joy-fontFamily-fallback)",
    },
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    backdrop: "rgba(0,0,0,0.9)",
                },
                primary: {
                    "50": "#fde7f1",
                    "100": "#fbd0e3",
                    "200": "#f6a2c8",
                    "300": "#f174ad",
                    "400": "#ed4592",
                    "500": "#e91677",
                    "600": "#bc105e",
                    "700": "#8d0c47",
                    "800": "#5e082f",
                    "900": "#2f0417",
                },
            },
        },
    },
    components: {
        JoyCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.backdrop,
                    backdropFilter: "blur(3px)",
                }),
            },
        },
        JoyInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.backdrop,
                    direction: "rtl",
                }),
            },
        },
        JoyTextarea: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.backdrop,
                }),
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CssVarsProvider defaultMode="system" theme={theme}>
            <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
            <CssBaseline />
            <App />
        </CssVarsProvider>
    </React.StrictMode>
);
