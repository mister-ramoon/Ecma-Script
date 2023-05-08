var lastName = "David";
lastName = "Juan";
console.log(lastName); // Juan

let fruit = "apple";
fruit = "banana";
console.log(fruit); // banana

const animal = "dog";
animal = "cat";
console.log(animal); // TypeError: Assignment to constant variable.

const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    let fruit2 = "banana";
    const fruit3 = "kiwi";
  }

  console.log(fruit1); // apple (FUNCTION SCOPE)
  console.log(fruit2); // ReferenceError: fruit2 is not defined (BLOCK SCOPE)
  console.log(fruit3); // ReferenceError: fruit3 is not defined (BLOCK SCOPE)
};

fruits();
