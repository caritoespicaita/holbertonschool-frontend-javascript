export default function getListStudents() {
  const array = ['Guillaume', '1', 'San Francisco',
    'James', '2', 'San Francisco',
    'Serena', '5', 'San Francisco'];

  return ([{ id: array[1], firstName: array[0], location: array[2] },
    { id: array[3], firstName: array[4], location: array[5] },
    { id: array[6], firstName: array[7], location: array[8] }]);
}
