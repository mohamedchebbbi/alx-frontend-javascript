/* eslint-disable linebreak-style */
/* eslint-disable indent */
export default function getStudentIdsSum(lst) {
    return lst.reduce((counter, currentObj) => counter + currentObj.id, 0);
  // eslint-disable-next-line eol-last
  }