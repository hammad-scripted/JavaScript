// String -sequence of characters

let str = 'Hello World';
let msg = 'Heyy';
console.log(str);
console.log(msg);

// ? strings are immutable, meaning that once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.
str[0] = 'h';
console.log(str); // Output: "Hello World" (unchanged)

// ? strings are immutable, meaning that once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.
str = str.toUpperCase();
console.log(str);
