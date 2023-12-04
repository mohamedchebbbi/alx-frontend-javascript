/* eslint-disable linebreak-style */
/* eslint-disable indent */
export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter((std) => std.location === city).map((std) => ({ ...std, grade: newGrades.filter((g) => g.studentId === std.id).map((g) => g.grade)[0] || 'N/A' }));
  // eslint-disable-next-line eol-last
  }