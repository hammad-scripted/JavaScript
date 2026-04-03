// // if else in js

let productStock = 0;

if (productStock == 0) {
  console.log('product is out of stock');
} else {
  console.log('product is in stock');
}

let score = 85;
if (score >= 90) {
  console.log('grade A');
} else if (score >= 80) {
  console.log('grade B');
} else if (score >= 70) {
  console.log('grade C');
} else if (score >= 60) {
  console.log('grade D');
} else {
  console.log('grade F');
}

let isLoggedIn = true;
let message = isLoggedIn ? 'Welcome back!' : 'Please log in.';
console.log(message); // This will print 'Welcome back!' because isLoggedIn is true.

let color = 'red';
switch (color) {
  case 'violet':
    console.log('The color is violet');
    break;
  case 'red':
    console.log('The color is red');
    break;
  case 'green':
    console.log('The color is green');
    break;
  default:
    console.log('The color is not violet, red, or green');
    break;
}
