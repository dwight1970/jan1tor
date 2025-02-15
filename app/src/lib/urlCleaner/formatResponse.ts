const formatResponse = (urls: string[], messageUrl?: string): string => `🔗 Clean URL(s) ${messageUrl ? ` in ${messageUrl}` : ''}:\n${urls.map((url) => `- <${url}>`).join('\n')}`;

export default formatResponse;

