// ? function declaration

function greet() {
  console.log('Hello World');
}

console.log(greet());

// ? function expression

const visitExpression = function visit() {
  console.log('Hey i am visiting');
};

console.log(visitExpression());

// ? arrow functions

const arrowFunc = (age) => {
  console.log('My age is ' + age);
};
console.log(arrowFunc(25));
