import { useState } from "react";
import Theme from "./models/Theme";
import PageSection from "./models/PageSection";
import Constants from "./properties/Constants";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    const [activePageSection, setActivePageSection] = useState<PageSection>(
        PageSection.HOME
    );

    const toggleTheme = () => {
        setTheme(theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

    const changeActivePageSection = (pageSection: PageSection) => {
        setActivePageSection(pageSection);
    };

    return (
        <>
            <div
                className={`${Constants.BG_COLOR} font-robotoLight tracking-wide min-w-screen min-h-screen`}
            >
                <NavBar
                    theme={theme}
                    toggleTheme={toggleTheme}
                    activePageSection={activePageSection}
                    changeActivePageSection={changeActivePageSection}
                />
                <h1>Rest of the Site is Under Development by Shantanu.</h1>
            </div>
        </>
    );
};

export default App;
