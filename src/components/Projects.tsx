const projects = [
    {
        title: "QuestLine",
        description:
            "Questline is a web app with the aim of simplifying complex tasks. The app is modeled to represent tasks as 'Quests', and it will break down those quests to make them simpler to complete. The app leverages OpenAI's Chat GPT to generate content.",
        tech: ["VueJs", "ExpressJs", "MongoDB"],
        github: "https://github.com/dredawkins11/questline",
        deployed: "https://questline.netlify.app/",
    },
    {
        title: "SimpleNote",
        description:
            "A simple full-stack note taking application. Users can create accounts to store notes, as well as create, update, and delete these notes.",
        tech: ["VueJs", "ExpressJs", "MongoDB"],
        github: "https://github.com/dredawkins11/simple-note",
        deployed: "https://simple-note-frontend.onrender.com/",
    },
    {
        title: "Meranda Art",
        description:
            "A mock up site for an artists portfolio. The site represents what could be an elegant website for showcasing and artists work along with an e-commerce addition.",
        tech: ["VueJs", "ExpressJs", "MongoDB"],
        github: "https://github.com/dredawkins11/meranda_art",
        deployed: "https://amazing-sopapillas-20c13f.netlify.app/",
    },
];

import { Box } from "@mui/joy";
import { forwardRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import Project from "./Project";

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
            <SectionHeader text="PROJECTS" />
            <Box display="flex" gap={2} flexWrap="wrap">
                {projects.map((project, i) => (
                    <Project key={i} index={i+1} {...project} />
                ))}
            </Box>
        </Box>
    );
});
export default Projects;
