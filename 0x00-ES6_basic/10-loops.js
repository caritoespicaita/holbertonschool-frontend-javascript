export default function appendToEachArrayValue(array, appendString) {
  const lista = [];
  for (const arr of array) {
    lista.push(appendString + arr);
  }
  return lista;
}
