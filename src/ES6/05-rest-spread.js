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
