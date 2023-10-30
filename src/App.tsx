import HeroSVG from "./assets/port-hero.svg?react";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Background from "./components/Background";

import { Box, Stack, Typography } from "@mui/joy";
import Footer from "./components/Footer";

function App() {

    return (
        <Box sx={(theme) => ({ backgroundColor: theme.vars.palette.background.body })}>
            <Background />
            
            <Stack
                sx={(theme)=>({
                    width: "60%",
                    margin: "auto",
                    gap: "50vh",
                    background: theme.vars.palette.background.backdrop,
                    alignItems:"center",
                    zIndex: 1,
                })}
            >
                <Box
                    width="100%"
                    height="110vh"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        sx={{
                            position: "relative",
                            top: "-10%",
                            "& svg": {
                                width: "33vw",
                                height: "11vw",
                            },
                        }}
                    >
                        <HeroSVG />
                        <Stack direction="row" justifyContent="space-between">
                            <Typography level="h4">FULL</Typography>
                            <Typography level="h4">STACK</Typography>
                            <Typography level="h4">WEB</Typography>
                            <Typography level="h4">DEVELOPMENT</Typography>
                        </Stack>
                    </Box>
                </Box>
                <About />
                <Projects />
                <Contact />
                <Footer />
            </Stack>
        </Box>
    );
}

export default App;
