/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default class Building {
    constructor(sqft = 0) {
      if (this.constructor !== Building
          && typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
  
      this._sqft = sqft;
    }
    // eslint-disable-next-line lines-between-class-members
    get sqft() {
      return this._sqft;
    // eslint-disable-next-line indent
    }
  // eslint-disable-next-line indent
  }