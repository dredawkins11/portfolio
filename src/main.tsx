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
                    backdrop: "rgba(0,0,0,0.8)",
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
                neutral: {
                    plainHoverColor: "var(--joy-palette-primary-400)",
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
        JoyLink: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "&:hover": {
                        textDecorationLine: "none",
                        transform: `translateY(-${theme.spacing(0.5)})`,
                        color: theme.vars.palette.neutral.plainHoverColor,
                    },
                    "& .MuiTypography-root:hover": {
                        color: theme.vars.palette.neutral.plainHoverColor,
                    },
                    "& .MuiTypography-root": {
                        color: theme.vars.palette.text.primary,
                    },
                }),
            },
            defaultProps: {
                target: "_blank",
            },
        },
        JoyIconButton: {
            styleOverrides: {
                root: { "&:hover": { background: "none" } },
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CssVarsProvider defaultMode="system" theme={theme}>
            <GlobalStyles
                styles={(theme) => ({
                    "*": { transition: "transform .2s" },
                    html: { scrollBehavior: "smooth" },
                    "span.MuiTypography-root": {
                        color: theme.vars.palette.primary[400],
                    },
                })}
            />
            <CssBaseline />
            <App />
        </CssVarsProvider>
    </React.StrictMode>
);
