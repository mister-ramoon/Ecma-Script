function newUser(name, age, country) {
  var name = name || "Juan";
  var age = age || 0;
  var country = country || "MX";
  console.log(name, age, country);
}

newUser();
newUser("Ricardo", 23, "CO");

// ES6
function newUserES6(name = "Juan", age = 0, country = "MX") {
  console.log(name, age, country);
}

newUserES6();
newUserES6("Ricardo", 23, "CO");
