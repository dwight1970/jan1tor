const hasLinks = (string: string): boolean => {
  const urls = string.match(/https?:\/\/[^\s/$.?#].[^\s]*/g);
  return !!(urls && urls.length > 0);
};

export default hasLinks;