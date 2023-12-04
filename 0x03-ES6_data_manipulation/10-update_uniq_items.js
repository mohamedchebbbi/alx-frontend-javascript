/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default function updateUniqueItems(map) {
    if (map instanceof Map) {
      for (const [key, value] of map) {
        if (value === 1) {
          map.set(key, 100);
        }
      }
    } else {
      throw new Error('Cannot process');
    }
    return map;
  }