import capitalize from 'lodash/capitalize';

export default function (value) {
  let result = value;

  if (result !== undefined) {
    const split = result.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1)

    result = split.map((word) => {
      return capitalize(word);
    });
    
    result = result.join(' ');
  }

  return result;
}