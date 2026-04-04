function greet(name) {
  console.log('Hello ' + name);
}

function processUser(callback) {
  let name = 'Hammad';
  callback(name);
}

processUser(greet);

// function returning another function

function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);
console.log(double(5));

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
