import clean from "./clean";

const urlCleaner = async (data: string): Promise<string[] | undefined> => {
  const urls = data.match(/https?:\/\/[^\s/$.?#].[^\s]*/g);
  const promises: Promise<string>[] = [];

  if (urls === null || urls?.length === 0) return;


  (urls || []).forEach((url: string) => {
    promises.push(clean(url));
  });

  const resolved = new Set([...await Promise.all(promises)]);

  if (resolved.size === 0) return;

  // remove any urls that are identical
  urls.forEach((url: string) => resolved.delete(url));

  return Array.from(resolved);
};

export default urlCleaner;
