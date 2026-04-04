let user = {
  name: 'hammad',
  age: 25,
  isAdmin: true,
  //   // function inside an object is called method
  greet: function () {
    console.log('Hello, I am ' + this.name);
  },
};
console.log(user.name);
user.greet();
console.log(user['age']);

user.city = 'Amroha';
console.log(user);
delete user.isAdmin;
console.log(user);

// ? object is a collection of properties, and a property is an association between a name (or key) and a value. A value of a property can be a function, in which case the property is known as a method.
// ? Objects are mutable, meaning that their properties can be changed after they are created.

// ? Objects are dynamic, meaning that their properties can be added or removed after they are created.

// ? Objects are reference types, meaning that they are passed by reference rather than by value.
let obj1 = { fname: 'Adnaan', age: 24 };
let { fname, age } = obj1;
console.log(fname, age);

let newUser = { ...obj1, ...user };
console.log(newUser);
console.log(user.address?.city);
console.log(Object.keys(user));
console.log(Object.values(user));

// factory function in js
// //In JavaScript, a factory function is any function (that is not a class or constructor) that returns a new object

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello,my name is ${this.name}`);
    },
  };
}

const user1 = createPerson('Blob', 42);
const user2 = createPerson('James', 32);
console.log(user1);
console.log(user2);
