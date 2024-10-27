import { TidyURL } from "tidy-url";
import removeUnwantedParams from "./removeUnwantedParams";

const clean = async (data: string): Promise<string> => {
  const url = new URL(data);
  const tidyUrlClean = TidyURL.clean(url.toString()); // clean urls with TidyURL
  return await removeUnwantedParams(tidyUrlClean.url); // strip url from unwanted parameters
};

export default clean;
