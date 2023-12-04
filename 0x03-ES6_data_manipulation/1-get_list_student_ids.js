/* eslint-disable linebreak-style */
/* eslint-disable indent */
export default function getListStudentIds(lst) {
    if (Array.isArray(lst)) {
      return lst.map((obj) => obj.id);
    }
  
    return [];
  }