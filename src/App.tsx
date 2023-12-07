import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SideDecorations from "./components/SideDecorations";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Footer from "./components/Footer";

import { Box, Stack } from "@mui/joy";
import { useRef } from "react";
import Cursor  from "./assets/cursor.svg";

function App() {
    const scrollRefs = {
        hero: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        projects: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };

    const handleScroll = (section: "hero" | "about" | "projects" | "contact") =>
        scrollRefs[section].current?.scrollIntoView(
            section == "hero" ? true : false
        );

    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.vars.palette.background.body,
                userSelect: "none",
                cursor: `url(${Cursor}) 5 5, auto`,
            })}
        >
            <Background />
            <NavBar onScroll={handleScroll} />
            <SideDecorations />
            <Stack
                sx={(theme) => ({
                    width: "70%",
                    [theme.breakpoints.down("md")]: { width: "80%" },
                    margin: "auto",
                    gap: "20vh",
                    // background: theme.vars.palette.background.backdrop,
                    alignItems: "center",
                    zIndex: 1,
                })}
            >
                <Hero ref={scrollRefs.hero} />
                <About ref={scrollRefs.about} />
                <Projects ref={scrollRefs.projects} />
                <Contact ref={scrollRefs.contact} />
                <Footer />
            </Stack>
        </Box>
    );
}

export default App;
