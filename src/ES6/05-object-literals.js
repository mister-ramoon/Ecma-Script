// enahced object literals

// es5
function newUser(user, age, country) {
  return {
    user: user,
    age: age,
    country: country,
  };
}

console.log(newUser("Oscar", 32, "MX"));

// es6
function newUserES6(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUserES6("Oscar", 32, "MX", 1));
