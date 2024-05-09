import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import Theme from "../../models/Theme";
import PageSection from "../../models/PageSection";
import CommonUtils from "../../utils/CommonUtils";

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
        console.log(event.clientX);
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
        <nav className="flex justify-center p-4">
            <FaHome className="cursor-pointer text-2xl" />

            {/* Page Section Buttons*/}
            <ul className="flex mx-auto justify-end">
                {pageSectionList.map((pageSection) => {
                    const classes =
                        "gap-4" +
                        (pageSection === activePageSection
                            ? "text-xl text-red-600"
                            : "text-xl");

                    return (
                        <li
                            className={classes}
                            onClick={handleSectionChange}
                            key={pageSection}
                            data-section={pageSection}
                        >
                            {pageSection}
                        </li>
                    );
                })}
            </ul>

            {/* Theme Button */}
            {getThemeButton()}
        </nav>
    );
};

export default NavBar;
