/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
    };
  }