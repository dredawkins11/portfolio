import { useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import SingleProject from "./components/SingleProject";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
} from "react-router-dom";

import classes from "./App.module.scss";
import Background from "./components/Background";

function App() {
    const [activePage, setActivePage] = useState("home");

    const location = useLocation();
    useEffect(() => {
        const pages = ["home", "about", "contact", "projects"]
        let pageName = location.pathname.split("portfolio/")[1];
        if (!pages.includes(pageName)) pageName = "home";
        setActivePage(pageName);
    }, [location]);

    const [darkTheme, setDarkTheme] = useState(true);
    const theme = {
        "--theme": darkTheme ? "#0A090C" : "#EFEFEF",
        "--anti-theme": !darkTheme ? "#0A090C" : "#EFEFEF",
        "--theme-r": darkTheme ? 10 : 239,
        "--theme-g": darkTheme ? 9 : 239,
        "--theme-b": darkTheme ? 12 : 239,
        "--anti-theme-r": !darkTheme ? 10 : 239,
        "--anti-theme-g": !darkTheme ? 9 : 239,
        "--anti-theme-b": !darkTheme ? 12 : 239,
    };

    function handleChangeTheme() {
        setDarkTheme((prevState) => !prevState);
    }

    return (
        <div className={classes.app} style={theme}>
            {/* <div className={classes.nameTitle}>DREVAYNE DAWKINS</div>
            <header className={classes.header}>
                <div className={classes.topMenuContainer}>
                    <div className={classes.activePage}>{activePage}</div>
                    <Link to="portfolio/" className={classes.backToHome}>
                        back to home
                    </Link>
                </div>
            </header>
            <aside className={classes.sideBar}>
                <div
                    className={`${classes.themeButton} ${
                        !darkTheme ? classes.activeTheme : ""
                    }`}
                    onClick={handleChangeTheme}
                >
                    light
                </div>
                <div
                    className={`${classes.themeButton} ${
                        darkTheme ? classes.activeTheme : ""
                    }`}
                    onClick={handleChangeTheme}
                >
                    dark
                </div>
            </aside>
            <div className={classes.contentContainer}>
                <Routes>
                    <Route path="portfolio/" element={<Home />} />
                    <Route path="portfolio/about" element={<About />} />
                    <Route path="portfolio/contact" element={<Contact />} />
                    <Route path="portfolio/projects" element={<Projects />} />
                    <Route path="portfolio/project/:id" element={<SingleProject />} />
                </Routes>
            </div> */}
            <Background />
        </div>
    );
}

export default App;
