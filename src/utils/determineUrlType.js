// Author: mattwright324
// https://github.com/mattwright324/youtube-metadata

export default function (value, patterns) {
  const parsed = {
      type: 'unknown',
      original: value
  };
  for (let type in patterns) {
    for (let i = 0; i < patterns[type].length; i++) {
      const regex = patterns[type][i];
      const result = regex.exec(value);

      if (result) {
        parsed.type = type;
        parsed.value = result[1];

        return parsed;
      }
    }
  }

  return parsed;
}