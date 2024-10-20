import { TidyURL } from "tidy-url";

const clean = (url: string): string => {
    const tidyUrlClean = TidyURL.clean(url);
    // @TODO filter using blacklist & custom blacklist
    return tidyUrlClean.url;
};

export default clean;
