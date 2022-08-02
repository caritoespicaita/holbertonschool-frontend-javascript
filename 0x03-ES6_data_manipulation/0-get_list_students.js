export default function getListStudents() {
  const array = ['Guillaume', '1', 'San Francisco'];
  const array1 = ['James', '2', 'San Francisco'];
  const array2 = ['Serena', '5', 'San Francisco'];

  return ([{ id: array[1], firstName: array[0], location: array[2] },
    { id: array1[1], firstName: array1[0], location: array1[2] },
    { id: array2[1], firstName: array2[0], location: array2[2] }]);
}
