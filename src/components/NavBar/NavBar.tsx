import React from "react";
import { FaHome } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import Theme from "../../models/Theme";
import PageSection from "../../models/PageSection";
import CommonUtils from "../../utils/CommonUtils";
import Constants from "../../properties/Constants";

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
    const handleClickThemeChange = (event: React.MouseEvent) => {
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

    const pageSectionList = CommonUtils.getPageSectionList();

    const handleSectionChange = (event: React.MouseEvent) => {
        const selectedPageSection = (event.currentTarget as HTMLInputElement)
            .dataset.section as PageSection;
        if (selectedPageSection !== activePageSection) {
            changeActivePageSection(selectedPageSection as PageSection);
        }
    };

    return (
        <nav
            className={`${Constants.TEXT_WHITE_COLOR} text-white flex justify-between p-4 `}
        >
            <div className="flex">
                {/* Home Button */}
                <FaHome className="cursor-pointer text-2xl mr-4" />

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

            {/* Theme Button */}
            {getThemeButton()}
        </nav>
    );
};

export default NavBar;
