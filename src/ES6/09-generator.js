function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const iterable = iterate(["Oscar", "Alejandro", "Fernando", "Yesica"]);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
