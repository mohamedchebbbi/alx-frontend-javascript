/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default function createIteratorObject(report) {
    const emps = [];
    for (const dep of Object.keys(report.allEmployees)) {
      for (const emp of report.allEmployees[dep]) {
        emps.push(emp);
      }
    }
    return emps;
}