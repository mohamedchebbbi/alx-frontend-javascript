/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
export default class HolbertonClass {
    constructor(size, location) {
      if (typeof size !== 'number') {
        throw new TypeError('Size must be a number');
      } else if (typeof location !== 'string') {
        throw new TypeError('Location must be a string');
      }
  
      this._size = size;
      this._location = location;
    }
  
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return this._size;
      }
      return this._location;
    // eslint-disable-next-line indent
    }
  // eslint-disable-next-line indent
  }