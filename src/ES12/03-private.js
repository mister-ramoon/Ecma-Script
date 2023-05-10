// Declaration
//class User {}

// Instanciate
//const newUser = new User();

class User {
  // method
  greeting() {
    return "Hello";
  }
}

const newUser = new User();
console.log(newUser.greeting());

class User {
  // Constructor
  constructor() {
    console.log("Nuevo usuario");
  }

  greeting() {
    return "Hello";
  }
}

const david = new user();

// this
class User {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `Hello ${this.name}`;
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new User("Ana");
console.log(ana.greeting());

// Setters and getters

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  #speak() {
    return `Hello ${this.name}`;
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }

  set #uAge(age) {
    this.age = age;
  }
}

const ana1 = new User("Ana", 23);
console.log(ana1.uAge);
console.log((ana1.uAge = 24));
