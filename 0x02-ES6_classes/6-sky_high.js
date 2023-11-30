/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return (this._floors);
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style

export default SkyHighBuilding;