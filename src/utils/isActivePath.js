import lowerCase from 'lodash/lowerCase';

export default function(activePath, item) {
  return activePath.includes(lowerCase(item));
}