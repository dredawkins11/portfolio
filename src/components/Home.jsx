import React from "react";
import { Link } from "react-router-dom";

import classes from "../styles/Home.module.scss";

const Home = () => {
    return (
        <section className={classes.homeContainer}>
            <div className={classes.linkContainer}>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <p className={classes.bottomCaption}>full stack web development</p>
        </section>
    );
};
export default Home;
