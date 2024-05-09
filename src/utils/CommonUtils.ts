import PageSection from "../models/PageSection";

class CommonUtils {
    static getPageSectionList(): string[] {
        return Object.keys(PageSection)
            .filter(ps => isNaN(Number(ps)));
    }
}

export default CommonUtils;
