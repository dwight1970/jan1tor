const ensureTrailingSlash = (url: string): string => {
  try {
    const urlObj = new URL(url);
    // Add trailing slash only if the URL doesn't have one
    if (!urlObj.pathname.endsWith('/')) {
      urlObj.pathname += '/';
    }
    return urlObj.toString();
  } catch (e) {
    throw new Error(`Invalid URL provided: ${url}`);
  }
}

export default ensureTrailingSlash;
