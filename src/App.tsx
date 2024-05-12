import { useState } from "react";
import Theme from "./models/Theme";
import PageSection from "./models/PageSection";
import Colors from "./properties/Colors";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import LocomotiveScroll from "locomotive-scroll";
import Easing from "./utils/Easings";

const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    const [activePageSection, setActivePageSection] = useState<PageSection>(
        PageSection.HOME
    );

    let locomotiveScroll: LocomotiveScroll;
    const initLibraries = () => {
        locomotiveScroll = new LocomotiveScroll();
    };

    const toggleTheme = () => {
        setTheme(theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

    const changeActivePageSection = (pageSection: PageSection) => {
        setActivePageSection(pageSection);
    };

    initLibraries();
    const $target = "bottom"; // document.getElementById('bottom');

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
                <div className="flex my-auto justify-center h-[100vh] border-t-[1px] py-2">
                    <h1>Rest of the Site is Under Development by Shantanu.</h1>
                </div>
                <div className="flex my-auto justify-center h-[100vh] border-t-[1px] py-2">
                    <h1>Rest of the Site is Under Development by Shantanu.</h1>
                </div>
                <div className="flex my-auto justify-center h-[100vh] border-t-[1px] py-2">
                    <h1>Rest of the Site is Under Development by Shantanu.</h1>
                </div>
                <div className="flex my-auto justify-center h-[100vh] max-w-screen border-t-[1px] py-2">
                    <h1>Rest of the Site is Under Development by Shantanu.</h1>
                </div>
            </div>
        </>
    );
};

export default App;
