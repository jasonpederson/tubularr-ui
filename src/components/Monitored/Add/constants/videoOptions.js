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
    key: 'sourceVideoCodec',
    label: 'Video Codec',
    options: videoCodecs
  },
  {
    key: 'sourceAudioCodec',
    label: 'Audio Codec',
    options: audioCodecs
  },
  {
    key: 'sourceFileExtension',
    label: 'Video Extension',
    options: videoExtensions
  }
]