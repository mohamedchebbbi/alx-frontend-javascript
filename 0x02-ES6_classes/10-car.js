/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
export default class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    static get [Symbol.species]() {
      return this;
    }
  // eslint-disable-next-line no-trailing-spaces
  
    cloneCar() {
      const ModelCar = this.constructor[Symbol.species];
      return new ModelCar();
    // eslint-disable-next-line indent
    }
  // eslint-disable-next-line linebreak-style
  // eslint-disable-next-line indent, eol-last
  }