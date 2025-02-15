import { MessageStrategy } from "../../types";
import { EmbedBuilder, Message, APIEmbed, EmbedAuthorOptions } from "discord.js";
import urlCleaner from "../../../../lib/urlCleaner";
import extractYoutubeVideoId from "./util/extractYoutubeId";

class UrlStrategy implements MessageStrategy {
  async match(_message: Message): Promise<boolean> {
    // catch all
    return true;
  }

  async execute(message: Message) {
    const {content, embeds: originalEmbeds} = message;
    const cleanUrls = await urlCleaner(content);
    const embeds = cleanUrls?.length ? cleanUrls.map(url => {
      if (/(youtube.com|youtu.be)/.test(url)) {
        const videoId = extractYoutubeVideoId(url);
        const originalEmbedIndex = videoId ? originalEmbeds.findIndex(embed => embed.url?.includes(videoId)) : -1;
        if (originalEmbedIndex > -1) {
          const newEmbed = new EmbedBuilder();
          const originalEmbed = originalEmbeds[originalEmbedIndex] as APIEmbed;
          newEmbed.setAuthor({name: `${originalEmbed.author?.name}`});
          newEmbed.setColor(originalEmbed.color ?? null);
          newEmbed.setThumbnail(originalEmbed.thumbnail?.url ?? null);
          newEmbed.data.video = originalEmbed.video ?? undefined;
          // @todo try to forward original yt embed as intended (currently doesn't renders like original)
          return newEmbed;
        }
      }

      return {
        description: `Clean URL: ${url}`,
        color: 0x45bf49,
      };
    }) : [];

    message.suppressEmbeds().then(message => {
      message.channel.send({embeds});
    })
  }
}

export default UrlStrategy;
