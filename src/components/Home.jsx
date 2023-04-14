import React from "react";
import { Link } from "react-router-dom";

import classes from "../styles/Home.module.scss";

const Home = () => {
    return (
        <section className={classes.homeContainer}>
            <div className={classes.linkContainer}>
                <Link to="/portfolio/about">About</Link>
                <Link to="/portfolio/projects">Projects</Link>
                <Link to="/portfolio/contact">Contact</Link>
            </div>
            <p className={classes.bottomCaption}>full stack web development</p>
        </section>
    );
};
export default Home;
