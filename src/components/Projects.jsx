import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import classes from "../styles/Projects.module.scss";

const projects = [
    [
        {
            title: "Task Manager",
            tech: ["VueJs", "ExpressJs", "MongoDB"],
            link: "https://github.com/dredawkins11/task-manager-frontend"
        },
        {
            title: "Budget App",
            tech: ["ReactJs", "ExpressJs", "MongoDB"],
            link: "https://github.com/dredawkins11/budget-app"
        },
        {
            title: "Weather Tracker",
            tech: ["ReactJs", "ExpressJs", "MongoDB"],
            link: "https://github.com/dredawkins11/city-weather-tracker"
        },
        {
            title: "Habit Tracker",
            tech: ["ReactJs", "ExpressJs", "MongoDB"],
            link: "https://github.com/dredawkins11/work-day-scheduler"
        },
    ],
];

const Projects = () => {
    const [page, setPage] = useState(0)

    return (
        <section className={classes.projectsContainer}>
            <div className={classes.listControls}></div>
            <div className={classes.projectList}>
                {projects[page].map((project, ind) => (
                    <ProjectItem key={ind} {...project} />
                ))}
            </div>
        </section>
    );
};
export default Projects;
