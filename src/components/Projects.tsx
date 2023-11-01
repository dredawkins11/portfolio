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
import { Box, Card, IconButton, Link, Stack, Typography, styled } from "@mui/joy";
import { forwardRef } from "react";

const ProjectCard = styled(Card)(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.backdrop,
    backdropFilter: "blur(3px)",
    [theme.breakpoints.up("md")]: {
        aspectRatio: "1/1",
        width: "30%",
    },
}));

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
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
                            <Link href="#">
                                <IconButton>
                                    <Launch />
                                </IconButton>
                            </Link>
                            <Link href="#">
                                <IconButton>
                                    <GitHub />
                                </IconButton>
                            </Link>
                        </Box>
                    </Stack>
                    <Typography level="h3">Project 1</Typography>
                    <Typography level="body-md">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Magni corrupti optio, voluptatum id eligendi
                        incidunt ducimus necessitatibus earum illum rerum!
                    </Typography>
                </ProjectCard>
                <ProjectCard>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography level="body-lg" color="neutral">
                            02.
                        </Typography>
                        <Box>
                            <Link href="#">
                                <IconButton>
                                    <Launch />
                                </IconButton>
                            </Link>
                            <Link href="#">
                                <IconButton>
                                    <GitHub />
                                </IconButton>
                            </Link>
                        </Box>
                    </Stack>
                    <Typography level="h3">Project 2</Typography>
                    <Typography level="body-md">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Magni corrupti optio, voluptatum id eligendi
                        incidunt ducimus necessitatibus earum illum rerum!
                    </Typography>
                </ProjectCard>
                <ProjectCard>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography level="body-lg" color="neutral">
                            03.
                        </Typography>
                        <Box>
                            <Link href="#">
                                <IconButton>
                                    <Launch />
                                </IconButton>
                            </Link>
                            <Link href="#">
                                <IconButton>
                                    <GitHub />
                                </IconButton>
                            </Link>
                        </Box>
                    </Stack>
                    <Typography level="h3">Project 3</Typography>
                    <Typography level="body-md">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Magni corrupti optio, voluptatum id eligendi
                        incidunt ducimus necessitatibus earum illum rerum!
                    </Typography>
                </ProjectCard>
            </Box>
        </Box>
    );
});
export default Projects;
