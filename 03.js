//? Arithmetic Operators in JavaScript
let a = 10,
  b = 5;

console.log(a + b); // This will print the sum of a and b, which is 15.

console.log(a - b); // This will print the difference of a and b, which is 5.
console.log(a * b); // This will print the product of a and b, which is 50.
console.log(a / b); // This will print the quotient of a and b, which is 2.
console.log(a % b); // This will print the remainder of a divided by b, which is 0.
console.log(a ** b); // This will print a raised to the power of b, which is 100000.

console.log(a++); // This will print a and then increment a by 1, which is 10.
console.log(b--); // This will print b and then decrement b by 1, which is 4.

//? Assignment Operators in JavaScript
let c = 10;
c += 5; // This is equivalent to c = c + 5
console.log(c); // This will print 15

c -= 3; // This is equivalent to c = c - 3
console.log(c); // This will print 12

c *= 2; // This is equivalent to c = c * 2
console.log(c); // This will print 24

c /= 4; // This is equivalent to c = c / 4
console.log(c); // This will print 6

c %= 3; // This is equivalent to c = c % 3
console.log(c); // This will print 0

// ? Comparison Operators in JavaScript
console.log(a > b); // This will print true because a (10) is greater than b (5).
console.log(a < b); // This will print false because a (10) is not less than b (5).
console.log(a >= b); // This will print true because a (10) is greater than or equal to b (5).
console.log(a <= b); // This will print false because a (10) is not less than or equal to b (5).
console.log(a == b); // This will print false because a (10) is not equal to b (5).
console.log(a != b); // This will print true because a (10) is not equal to b (5).
console.log(a === b); // This will print false because a (10) is not strictly equal to b (5).
console.log(a !== b); // This will print true because a (10) is not strictly equal to b (5).

//? Logical Operators in JavaScript
console.log(a > b && a < c); // This will print true because a (10) is greater than b (5) and a (10) is less than c (15).
console.log(a > b || a < c); // This will print true because a (10) is greater than b (5) or a (10) is less than c (15).
console.log(!a > b); // This will print false because a (10) is not greater than b (5).

//? Bitwise Operators in JavaScript
console.log(a & b); // This will print 0 because a (10) and b (5) have no common bits set.
console.log(a | b); // This will print 15 because a (10) or b (5) have at least one common bit set.
console.log(a ^ b); // This will print 15 because a (10) and b (5) have no common bits set.
console.log(~a); // This will print -11 because a (10) is the bitwise complement of 1010, which is 0101 in binary.
console.log(a << 1); // This will print 20 because a (10) is shifted left by 1 bit, which is equivalent to multiplying by 2.
console.log(a >> 1); // This will print 5 because a (10) is shifted right by 1 bit, which is equivalent to dividing by 2.

//? Unary Operators in JavaScript
console.log(+a); // This will print 10 because a (10) is a number.
console.log(-a); // This will print -10 because a (10) is a number.
console.log(a++); // This will print 10 and then increment a by 1, which is 11.
console.log(++a); // This will print 11 and then increment a by 1, which is 12.
console.log(a--); // This will print 12 and then decrement a by 1, which is 11.
console.log(--a); // This will print 11 and then decrement a by 1, which is 10.

//? Ternary Operators in JavaScript
console.log(a > b ? 'a is greater than b' : 'a is less than or equal to b'); // This will print 'a is greater than b' because a (10) is greater than b (5).
console.log(a < b ? 'a is less than b' : 'a is greater than or equal to b'); // This will print 'a is greater than or equal to b' because a (10) is not less than b (5).
