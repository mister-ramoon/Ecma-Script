// Optional Chaining
const users = {
  ramon: {
    country: "México",
  },
  juan: {
    country: "Colombia",
  },
};

console.log(users.ramon.country);
console.log(users?.david?.country);
