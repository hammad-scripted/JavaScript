for (let i = 0; i < 5; i++) {
  console.log(i);
}
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

let k = 1;

do {
  console.log(k);
  k++;
} while (k <= 5);

// for of loop in js

let arr = [1, 2, 3, 4, 5];

for (let value of arr) {
  console.log(value + ' ');
}

//  for in loop in js
let obj = { firstName: 'John', lastName: 'Doe', age: 30 };

for (let key in obj) {
  console.log(key + ': ' + obj[key]);
}
