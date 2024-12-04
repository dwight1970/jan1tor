const formatResponse = (urls: string[], messageUrl?: string): string => `🔗 URL(s) cleaned of tracking parameters${messageUrl ? ` in ${messageUrl}` : ''}:\n${urls.map((url) => `- <${url}>`).join('\n')}`;

export default formatResponse;

