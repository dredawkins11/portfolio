import React from "react";

import classes from "../styles/About.module.scss";

const About = () => {
    return (
        <section>
            <div className={classes.aboutParagraph}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec et odio lacinia, suscipit enim a, cursus augue. Duis a
                    ullamcorper velit. Integer sed molestie nibh, vitae ornare
                    dolor. Aenean ac nulla quis sem vehicula ullamcorper.
                    Curabitur non odio tellus.
                </p>
                <p>
                    Nunc finibus tortor ac ipsum bibendum luctus. Donec cursus
                    massa ligula, ut dapibus magna semper vitae. Vestibulum
                    hendrerit porttitor bibendum.
                </p>
            </div>
            <div className={classes.linksContainer}>
                <a href="#">Email</a>
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
            </div>
        </section>
    );
};
export default About;
