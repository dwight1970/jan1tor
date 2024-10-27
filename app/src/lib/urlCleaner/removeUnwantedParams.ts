import { Param } from "../../types/url";
import readJSON from "../helpers/readJSON";

const removeUnwantedParams = async (url: string): Promise<string> => {
  const urlObj = new URL(url);
  const params = urlObj.searchParams;
  const unwantedParams: Param[] = [
    ...await readJSON<Param[]>('../../../data/blacklist.json'),
    ...await readJSON<Param[]>('../../../data/custom.json'),
  ];

  params.forEach((value, key, parent) => {
    const unwantedParamIdx = unwantedParams.findIndex((p) => p.key === key);

    if (unwantedParamIdx < 0) return;
    const unwantedParam = unwantedParams[unwantedParamIdx];

    // remove key-only params
    if (unwantedParam.key === key && !unwantedParam.value) {
      parent.delete(key);
    }

    // remove key and value params
    if (unwantedParam.key === key && !!unwantedParam.value && unwantedParam.value === value) {
      parent.delete(key);
    }
  })

  return urlObj.toString();
};

export default removeUnwantedParams;
