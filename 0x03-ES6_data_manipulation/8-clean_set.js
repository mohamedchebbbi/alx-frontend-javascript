/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default function cleanSet(set, startString) {
    let text = '';
    const array = [];

    if (startString && typeof startString === 'string') {
      for (const element of set) {
        if (element && element.startsWith(startString)) {
          array.push(element.slice(startString.length));
        }
      }
      text = array.join('-');
    }
    return text;
  // eslint-disable-next-line indent
  }