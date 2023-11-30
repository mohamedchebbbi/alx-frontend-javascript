/* eslint-disable linebreak-style */
import Car from './10-car';

class EVCar extends Car {
  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
// eslint-disable-next-line linebreak-style

// eslint-disable-next-line eol-last
export default EVCar;