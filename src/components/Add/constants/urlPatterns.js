// Author: mattwright324
// https://github.com/mattwright324/youtube-metadata

export default {
  playlistId: [
      /(?:http[s]?:\/\/)?(?:\w+\.)?youtube.com\/playlist\?list=([\w_-]+)(?:&.*)?/i
  ],
  channelUser: [
      /(?:http[s]?:\/\/)?(?:\w+\.)?youtube.com\/user\/([\w_-]+)(?:\?.*)?/i
  ],
  channelId: [
      /(?:http[s]?:\/\/)?(?:\w+\.)?youtube.com\/channel\/([\w_-]+)(?:\?.*)?/i
  ],
  channelCustom: [
      /(?:http[s]?:\/\/)?(?:\w+\.)?youtube.com\/c\/([\w_-]+)(?:\?.*)?/i,
      /(?:http[s]?:\/\/)?(?:\w+\.)?youtube.com\/([\w_-]+)(?:\?.*)?/i
  ]
};