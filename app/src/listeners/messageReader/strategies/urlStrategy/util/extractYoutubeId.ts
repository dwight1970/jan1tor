const extractYoutubeVideoId =(url: string): string | null => {
  // Clean up the URL
  const cleanUrl = url.trim();

  // Pattern matching for different URL formats
  const patterns = [
    // youtu.be/[id]
    /^(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/i,

    // youtube.com/watch?v=[id]
    /^(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/i,

    // youtube.com/v/[id]
    /^(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/v\/([a-zA-Z0-9_-]{11})/i,

    // youtube.com/embed/[id]
    /^(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/i,

    // youtube.com/shorts/[id]
    /^(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i
  ];

  for (const pattern of patterns) {
    const match = cleanUrl.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

export default extractYoutubeVideoId;
