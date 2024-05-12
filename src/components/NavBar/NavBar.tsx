import React from "react";
import { FaHome } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import Theme from "../../models/Theme";
import PageSection from "../../models/PageSection";
import CommonUtils from "../../utils/CommonUtils";
import Colors from "../../properties/Colors";

interface NavBarProps {
    theme: Theme;
    toggleTheme: () => void;
    activePageSection: PageSection;
    changeActivePageSection: (pageSection: PageSection) => void;
}

const NavBar: React.FC<NavBarProps> = ({
    theme,
    toggleTheme,
    activePageSection,
    changeActivePageSection,
}) => {
    const handleClickThemeChange = (_: React.MouseEvent) => {
        toggleTheme();
    };

    const getThemeButton = () => {
        return theme === Theme.LIGHT ? (
            <IoSunny
                className="cursor-pointer text-2xl"
                onClick={handleClickThemeChange}
            />
        ) : (
            <BsMoonStarsFill
                className="cursor-pointer text-2xl"
                onClick={handleClickThemeChange}
            />
        );
    };

    const navigateToActivePageSection = () => {
        /** TODO: Implement the scrolling to the activePageSection using 'scrollTo() from the locomotive scroll:
         * https://scroll.locomotive.ca/docs/#/methods?id=scrolltotarget-options
         */
    };

    const pageSectionList = CommonUtils.getPageSectionList();

    const handleSectionChange = (event: React.MouseEvent) => {
        const selectedPageSection = (event.currentTarget as HTMLInputElement)
            .dataset.section as PageSection;
        if (selectedPageSection !== activePageSection) {
            changeActivePageSection(selectedPageSection as PageSection);
            navigateToActivePageSection(activePageSection);
        }
    };

    return (
        <nav
            className={`absolute w-screen top-0 ${Colors.TEXT_WHITE_COLOR} text-white flex p-4 `}
        >
            <div className="flex z-10 justify-between w-full">
                {/* Home Button */}
                <div className="flex left-nav-container">
                    <FaHome
                        className={`cursor-pointer text-2xl mr-4 hover:${Colors.TEXT_ACCENT_COLOR}`}
                    />

                    {/* Page Section Buttons*/}
                    <ul className="flex mx-auto justify-end">
                        {pageSectionList.map((pageSection) => {
                            const classes =
                                "cursor-pointer mr-4 duration-500 my-auto " +
                                (pageSection === activePageSection
                                    ? "border-b-2 border-white"
                                    : "border-b-2 border-transparent text-md hover:border-slate-500");

                            return (
                                <li
                                    className={classes}
                                    onClick={handleSectionChange}
                                    key={pageSection}
                                    data-section={pageSection}
                                >
                                    {CommonUtils.capitalize(pageSection)}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Theme Button */}
            {getThemeButton()}
        </nav>
    );
};

export default NavBar;
