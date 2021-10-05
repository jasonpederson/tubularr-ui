export default function (values) {
  let normalized = values;

  // TO REMOVE ONCE API UPDATED
  normalized.lastIndexedOn = '';
  normalized.subtitleLanguage = normalized.downloadSubtitles === 1 ? normalized.subtitleLanguage : '';

  normalized.download = 1;
  normalized.createdOn = new Date().toUTCString();
  normalized.prefer60fps = normalized.prefer60fps ? 1 : 0;
  normalized.preferHdr = normalized.preferHdr ? 1 : 0;
  normalized.downloadThumbnails = normalized.downloadThumbnails ? 1 : 0;
  normalized.downloadNfo = normalized.downloadNfo ? 1 : 0;
  normalized.downloadSubtitles = normalized.downloadSubtitles === 'yes' ? 1 : 0;

  return normalized;
}