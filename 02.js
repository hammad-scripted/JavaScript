console.log(typeof 'Hello');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // This is a special case in JavaScript, it returns "object" but it's actually a primitive value.
console.log(typeof {}); // This is an object
console.log(typeof []); // This is an array, but it also returns "object" because arrays are a type of object in JavaScript.
console.log(
  typeof function greet() {
    console.log('Hello');
  },
);

// The typeof operator is used to determine the type of a variable or expression. It returns a string indicating the type of the operand.
// typeof function greet() { console.log('Hello'); } a function? Yes, it is. In JavaScript, functions are first-class objects, which means they can be treated like any other value (assigned to variables, passed as arguments, etc.). The typeof operator will return "function" for any function declaration or expression.
