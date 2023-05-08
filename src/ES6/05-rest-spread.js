// Arrays destructuring
let fruits = ["apple", "orange", "banana"];
let [apple, orange, banana] = fruits;
console.log(apple, orange, fruits[2]);

// Objects destructuring
let user = {
  username: "oscar",
  age: 32,
  country: "MX",
};

let { username, age, country } = user;
console.log(username, age, user.country);

// Spread operator
let person = {
  name: "Oscar",
  age: 32,
};

let countryPerson = "MX";

let data = { id: 1, ...person, countryPerson };
console.log(data);

// Rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3, 4, 5);
