/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default function createEmployeesObject(departmentName, employees) {
    return { [departmentName]: [...employees] };
  }