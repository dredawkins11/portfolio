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
console.log(classes);

function App() {
    const [activePage, setActivePage] = useState("home");

    const location = useLocation();
    useEffect(() => {
        let pageName = location.pathname.slice(1);
        if (!pageName) pageName = "home";
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
            <div className={classes.nameTitle}>DREVAYNE DAWKINS</div>
            <header className={classes.header}>
                <div className={classes.topMenuContainer}>
                    <div className={classes.activePage}>{activePage}</div>
                    <Link to="/" className={classes.backToHome}>
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
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<SingleProject />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
