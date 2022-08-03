export default function getStudentIdsSum(students) {
  const sum = students.reduce((pvalue, cuvalue) => pvalue + cuvalue.id, 0);
  return sum;
}
