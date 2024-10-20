import clean from "./clean";

const urlCleaner = (data: string): string | undefined => {
  const urls = data.match(/https?:\/\/[^\s/$.?#].[^\s]*/g);
  const result: string[] = [];

  if (urls && urls?.length === 0) return;

  (urls || []).forEach((url: string) => {
    const cleaned = clean(url);
    if (cleaned) {
      result.push(cleaned);
    }
  });

  if (!result.length) return;

  return `
    Tracking params found in URL(s):\n
    ${result.map((item) => { return `- ${item}\n` }).join('')}
    `;

};

export default urlCleaner;
