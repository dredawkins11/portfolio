// const projects = [
//     [
//         {
//             title: "Task Manager",
//             tech: ["VueJs", "ExpressJs", "MongoDB"],
//             link: "https://github.com/dredawkins11/task-manager-frontend"
//         },
//         {
//             title: "Budget App",
//             tech: ["ReactJs", "ExpressJs", "MongoDB"],
//             link: "https://github.com/dredawkins11/budget-app"
//         },
//         {
//             title: "Weather Tracker",
//             tech: ["ReactJs", "ExpressJs", "MongoDB"],
//             link: "https://github.com/dredawkins11/city-weather-tracker"
//         },
//         {
//             title: "Habit Tracker",
//             tech: ["ReactJs", "ExpressJs", "MongoDB"],
//             link: "https://github.com/dredawkins11/work-day-scheduler"
//         },
//     ],
// ];

import { Launch, GitHub } from "@mui/icons-material";
import {
    Box,
    Card,
    IconButton,
    Link,
    Stack,
    Typography,
    styled,
} from "@mui/joy";
import { forwardRef } from "react";

const ProjectCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    backgroundColor: theme.palette.background.backdrop,
    backdropFilter: "blur(3px)",
    [theme.breakpoints.up("md")]: {
        aspectRatio: "1/1",
        width: "30%",
    },
}));

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Box
            ref={ref}
            width={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            paddingBottom="20vh"
        >
            <Stack
                direction="row"
                alignItems="center"
                mb={3}
                gap={3}
                sx={{
                    width: 1,
                    justifyContent: "space-between",
                    "& div": {
                        flexGrow: 1,
                        height: "1px",
                        border: "none",
                        borderTop: "solid 1px ",
                    },
                }}
            >
                <Typography level="h1">PROJECTS</Typography>
                <div></div>
            </Stack>
            <Box display="flex" gap={2} flexWrap="wrap">
                <ProjectCard>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography level="body-lg" color="neutral">
                            01.
                        </Typography>
                        <Box>
                            <Link href="https://simple-note-frontend.onrender.com/">
                                <IconButton>
                                    <Launch />
                                </IconButton>
                            </Link>
                            <Link href="https://github.com/dredawkins11/simple-note">
                                <IconButton>
                                    <GitHub />
                                </IconButton>
                            </Link>
                        </Box>
                    </Stack>
                    <Box flexGrow={1}>
                        <Typography level="h3">Simple Note</Typography>
                        <Typography level="body-md">
                            A simple full-stack note taking application. Users
                            can create accounts to store notes, as well as
                            create, update, and delete these notes.
                        </Typography>
                    </Box>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography level="body-sm">React</Typography>
                        <Typography level="body-sm">GraphQL</Typography>
                        <Typography level="body-sm">MongoDB</Typography>
                    </Stack>
                </ProjectCard>
                <ProjectCard>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography level="body-lg" color="neutral">
                            01.
                        </Typography>
                        <Box>
                            <Link href="https://stellar-sherbet-616974.netlify.app/">
                                <IconButton>
                                    <Launch />
                                </IconButton>
                            </Link>
                            <Link href="https://github.com/dredawkins11/questline">
                                <IconButton>
                                    <GitHub />
                                </IconButton>
                            </Link>
                        </Box>
                    </Stack>
                    <Box flexGrow={1}>
                        <Typography level="h3">Questline</Typography>
                        <Typography level="body-md">
                            Questline is a web app with the aim of simplifying
                            complex tasks. The app is modeled to represent tasks
                            as 'Quests', and it will break down those quests to
                            make them simpler to complete. The app leverages
                            OpenAI's ChatGBT to generate content.
                        </Typography>
                    </Box>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography level="body-sm">React</Typography>
                        <Typography level="body-sm">OpenAI</Typography>
                        <Typography level="body-sm">ExpressJS</Typography>
                    </Stack>
                </ProjectCard>
                <ProjectCard>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography level="body-lg" color="neutral">
                            01.
                        </Typography>
                        <Box>
                            <Link href="https://amazing-sopapillas-20c13f.netlify.app/">
                                <IconButton>
                                    <Launch />
                                </IconButton>
                            </Link>
                            <Link href="https://github.com/dredawkins11/meranda_art">
                                <IconButton>
                                    <GitHub />
                                </IconButton>
                            </Link>
                        </Box>
                    </Stack>
                    <Box flexGrow={1}>
                        <Typography level="h3">Meranda Art</Typography>
                        <Typography level="body-md">
                            A mock up site for an artists portfolio. The site
                            represents what could be an elegant website for
                            showcasing and artists work along with an e-commerce
                            addition.
                        </Typography>
                    </Box>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography level="body-sm">HTML</Typography>
                        <Typography level="body-sm">CSS</Typography>
                        <Typography level="body-sm">JavaScript</Typography>
                    </Stack>
                </ProjectCard>
            </Box>
        </Box>
    );
});
export default Projects;
