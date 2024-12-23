// 🚀 ECMAScript 3 (Released: December 1999)

// Key Features:
// 1) Regular Expressions
//    * ECMAScript 3 introduced regular expressions to JavaScript, allowing pattern matching and text manipulation.

// Regular Expression Example: Matching a pattern in a string
var pattern = /hello/i;  // 'i' flag for case-insensitive search
var text = "Hello, World!";
console.log(pattern.test(text));  // Outputs: true (case-insensitive match)

// 2) Enhanced String Methods
//    * New methods like `trim()`, `toLowerCase()`, `toUpperCase()`, and `replace()` were enhanced or introduced in ES3.

// String Methods Example
var str = "  Hello, ECMAScript 3!  ";
console.log(str.trim());  // Outputs: "Hello, ECMAScript 3!" (removes whitespace)

// 3) Array Methods
//    * New array methods like `forEach()`, `map()`, `filter()`, etc., were added in ES3.

// Array Example: Using forEach()
var arr = [1, 2, 3, 4];
arr.forEach(function(item) {
    console.log(item);  // Outputs: 1, 2, 3, 4 (each item printed)
});

// 4) Error Handling (try-catch Improvements)
//    * Error handling was improved in ES3, specifically with the ability to define `Error` objects.

// Error Handling Example: Creating a custom error
try {
    throw new Error("Something went wrong in ECMAScript 3!");
} catch (error) {
    console.log(error.message);  // Outputs: Something went wrong in ECMAScript 3!
}

// 5) New Object Methods and Improvements
//    * New object methods like `Object.prototype.toString()` and `Object.keys()` were introduced.

// Example: Object with toString() method
var person = {
    name: "Alice",
    age: 30
};
console.log(person.toString());  // Outputs: [object Object]

// 6) New Methods for Working with Dates
//    * New methods like `getFullYear()`, `getMonth()`, `getDate()`, and others were introduced for Date manipulation.

// Date Example: Getting the current year
var date = new Date();
console.log(date.getFullYear());  // Outputs the current year, e.g., 2024

// ECMAScript 3 was a major milestone, introducing significant improvements to the language
// and helping lay the foundation for modern JavaScript development.
