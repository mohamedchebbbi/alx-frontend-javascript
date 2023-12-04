/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default function hasValuesFromArray(set, arr) {
    // eslint-disable-next-line indent
    return arr.reduce((prev, curr) => prev && set.has(curr), true);
  // eslint-disable-next-line eol-last
  }