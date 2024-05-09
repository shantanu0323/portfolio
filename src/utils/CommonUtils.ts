import PageSection from "../models/PageSection";

class CommonUtils {
    static getPageSectionList(): string[] {
        return Object.keys(PageSection).filter((ps) => isNaN(Number(ps)));
    }

    static capitalize = (s: string) => {
        return `${s[0]}${s.toLowerCase().substring(1, s.length)}`;
    };
}

export default CommonUtils;
