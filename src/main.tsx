import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, CssVarsProvider, extendTheme } from "@mui/joy";

const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    backdrop:
                        "rgba(0,0,0,0.9)",
                },
            },
        },
    },
    components: {
        JoyCard: {
            styleOverrides: {
                root: ({theme}) => ({
                    backgroundColor: theme.palette.background.backdrop,
                    backdropFilter: "blur(3px)"
                })
            }
        },
        JoyInput: {
            styleOverrides: {
                root: ({theme}) => ({
                    backgroundColor: theme.palette.background.backdrop,
                    direction: "rtl"
                })
            }
        },
        JoyTextarea: {
            styleOverrides: {
                root: ({theme}) => ({
                    backgroundColor: theme.palette.background.backdrop
                })
            }
        }
    }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CssVarsProvider defaultMode="system" theme={theme}>
            <CssBaseline />
            <App />
        </CssVarsProvider>
    </React.StrictMode>
);
