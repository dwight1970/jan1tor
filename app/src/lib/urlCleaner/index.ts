import clean from "./clean";
import { TidyURL } from "tidy-url";
import ensureTrailingSlash from "../helpers/ensureTrailingSlash";

const urlCleaner = async (data: string): Promise<string[] | undefined> => {
  const urls = data.match(/https?:\/\/[^\s/$.?#].[^\s]*/g);
  const promises: Promise<string>[] = [];

  if (urls === null || urls?.length === 0) return;


  (urls || []).forEach((url: string) => {
    promises.push(clean(url));
  });

  const resolved = new Set([...await Promise.all(promises)]);

  if (resolved.size === 0) return;

  //const compare = urls.map(ensureTrailingSlash);

  // remove any urls that are identical
  // compare.forEach((url: string) => resolved.delete(url));
  urls.forEach((url: string) => resolved.delete(url));

  return Array.from(resolved);
};

export default urlCleaner;
