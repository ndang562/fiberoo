// first 50 Fibonacci numbers
function fib() {
  const fibonacci = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

// convert  array of numbers to an array of strings
const numsToStrings = (numbers) => numbers.map(num => `${num}`);

// Function to count the number of even numbers in an array
const numEvenNums = (numbers) => numbers.filter(num => num % 2 === 0).length;


console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
