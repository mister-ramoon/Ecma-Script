async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const anotherAsyncIterator = anotherGenerator();
anotherAsyncIterator.next().then((response) => console.log(response.value));
anotherAsyncIterator.next().then((response) => console.log(response.value));
anotherAsyncIterator.next().then((response) => console.log(response.value));
console.log("Hello");

async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}
const names = arrayOfNames(["Ramon", "Ruiz", "Gonzalez"]);
console.log("after");
