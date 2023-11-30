/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
export default class HolbertonCourse {
    constructor(name, length, students) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      } else if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      } else if (!Array.isArray(students)) {
        throw new TypeError('Students must be an array of strings');
      }
  
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    get name() {
      return this._name;
    }
  
    get length() {
      return this._length;
    }
  
    get students() {
      return this._students;
    }
  
    set name(name) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = name;
    }
  
    set length(length) {
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = length;
    }
  // eslint-disable-next-line no-trailing-spaces
  
    set students(students) {
      if (!Array.isArray(students)) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = students;
    // eslint-disable-next-line indent
    }
  // eslint-disable-next-line eol-last, indent
  }