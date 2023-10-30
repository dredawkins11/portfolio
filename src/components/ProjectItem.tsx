import React, { useState } from "react";
import classes from "../styles/ProjectItem.module.scss";

const ProjectItem = ({ title, tech, link }) => {
    return (
        <div className={classes.projectContainer}>
            <a className={classes.projectTitle} href={link} target="about:blank">{title}</a>
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
