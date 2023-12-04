/* eslint-disable linebreak-style */
/* eslint-disable indent */
export default function getStudentsByLocation(lst, city) {
    return lst.filter((obj) => obj.location === city);
  }