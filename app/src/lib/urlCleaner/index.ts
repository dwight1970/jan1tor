import clean from "./clean";

const urlCleaner = (data: string): string[] | undefined => {
  const urls = data.match(/https?:\/\/[^\s/$.?#].[^\s]*/g);
  const result: string[] = [];

  if (urls && urls?.length === 0) return;

  (urls || []).forEach((url: string) => {
    const cleaned = clean(url);
    if (url !== cleaned) { // push only if change was made
      result.push(cleaned);
    }
  });

  if (!result.length) return;

  return result;
};

export default urlCleaner;
