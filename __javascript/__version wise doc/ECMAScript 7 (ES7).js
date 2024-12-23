// 🚀 ECMAScript 7 (Released: June 2016)

// Key Features:

// 1) Array.prototype.includes()
//    * The `includes()` method checks if an array contains a specific element and returns `true` or `false`.
//    * It is a more readable and convenient alternative to `indexOf()`.

// Example: Using Array.prototype.includes()
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3));  // Outputs: true
console.log(numbers.includes(6));  // Outputs: false

// Note: `includes()` works with `NaN` (unlike `indexOf()`).
console.log([NaN].includes(NaN));  // Outputs: true

// 2) Exponentiation Operator (**)
//    * The `**` operator is a new way to perform exponentiation. It simplifies the syntax compared to `Math.pow()`.
//    * `a ** b` is equivalent to `Math.pow(a, b)`.

// Example: Using the Exponentiation Operator
console.log(2 ** 3);  // Outputs: 8 (2 raised to the power of 3)
console.log(5 ** 2);  // Outputs: 25 (5 squared)

// More examples of exponentiation
let base = 10;
let exponent = 4;
console.log(base ** exponent);  // Outputs: 10000 (10 raised to the power of 4)

// ECMAScript 7 (ES7) was a relatively small update that focused on adding a couple of new features:
// `Array.prototype.includes()` for simpler array searches and the `**` exponentiation operator for cleaner syntax.
