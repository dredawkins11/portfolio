import React from "react";

import classes from "../styles/Contact.module.scss";

const Contact = () => {
    return (
        <section>
            <form action="submit" className={classes.contactForm}>
                <div className={classes.formGroup}>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="email">email</label>
                    <input type="text" />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="message">message</label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                    ></textarea>
                </div>
                <button>submit</button>
            </form>
            <p className={classes.bottomCaption}>I look forward to being in touch</p>
        </section>
    );
};
export default Contact;
