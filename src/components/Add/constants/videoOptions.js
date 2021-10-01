import sourceResolutions from './sourceResolutions';
import videoCodecs from './videoCodecs';
import audioCodecs from './audioCodecs';
import videoExtensions from './videoExtensions';

export default [
  {
    key: 'sourceResolution',
    label: 'Minimum Video Resolution',
    options: sourceResolutions
  },
  {
    key: 'videoCodec',
    label: 'Video Codec',
    options: videoCodecs
  },
  {
    key: 'audioCodec',
    label: 'Audio Codec',
    options: audioCodecs
  },
  {
    key: 'videoExtension',
    label: 'Video Extension',
    options: videoExtensions
  }
]