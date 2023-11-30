/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
export default class Airport {
    constructor(name, code) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      } else if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
  
      this._name = name;
      this._code = code;
    }
  // eslint-disable-next-line no-trailing-spaces
  
    get [Symbol.toStringTag]() {
      return `${this._code}`;
    }
  // eslint-disable-next-line linebreak-style
  // eslint-disable-next-line eol-last
  }