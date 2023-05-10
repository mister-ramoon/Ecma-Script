// Spread
const user = {
  username: "ramonruiz",
  age: 21,
  country: "MX",
};
const { username, ...value } = user;
console.log(username, value);
