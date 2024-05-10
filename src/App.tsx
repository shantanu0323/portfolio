import { useState } from "react";
import Theme from "./models/Theme";
import PageSection from "./models/PageSection";
import Colors from "./properties/Colors";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";

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
                className={`${Colors.BG_COLOR} font-robotoLight tracking-wide min-w-screen min-h-screen`}
            >
                <NavBar
                    theme={theme}
                    toggleTheme={toggleTheme}
                    activePageSection={activePageSection}
                    changeActivePageSection={changeActivePageSection}
                />
                <LandingPage />
                <div className="flex my-auto justify-center border-t-[1px] mt-4 py-2">
                    <h1>Rest of the Site is Under Development by Shantanu.</h1>
                </div>
            </div>
        </>
    );
};

export default App;
