import React, { useState } from "react";
import classes from "../styles/ProjectItem.module.scss";

const ProjectItem = ({ title, tech }) => {
    return (
        <div className={classes.projectContainer}>
            <a className={classes.projectTitle}>{title}</a>
            <div className={classes.techText}>
                {tech.map((tech, ind) => {
                    if (ind === 0) return <span>{tech}</span>;
                    return <span> / {tech}</span>;
                })}
            </div>
        </div>
    );
};
export default ProjectItem;
