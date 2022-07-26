export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('true'); // Yay! Everything went well!
    }, 250);
  });
}
