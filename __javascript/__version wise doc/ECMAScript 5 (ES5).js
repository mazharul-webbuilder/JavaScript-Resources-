// 🚀 ECMAScript 5 (Released: December 2009)

// Key Features:
// 1) Strict Mode
//    * Strict mode introduces a safer version of JavaScript by catching common coding errors and preventing certain actions.
//    * This was one of the most important features of ES5.

// Enabling Strict Mode
"use strict";  // Enables strict mode for the entire script or function

// In strict mode, you cannot assign to undeclared variables.
try {
    undeclaredVariable = "This will throw an error in strict mode";
} catch (e) {
    console.log(e.message);  // Outputs: "undeclaredVariable is not defined"
}

// 2) JSON Support
//    * ES5 introduced native support for JSON parsing and stringifying, making it easier to work with JSON data.

// JSON Example
var jsonString = '{"name": "Alice", "age": 25}';
var parsedData = JSON.parse(jsonString);
console.log(parsedData.name);  // Outputs: Alice

var object = { name: "Bob", age: 30 };
var jsonStringified = JSON.stringify(object);
console.log(jsonStringified);  // Outputs: {"name":"Bob","age":30}

// 3) Object Methods
//    * ES5 added new methods to the `Object` object, such as `Object.create()`, `Object.defineProperty()`, and `Object.defineProperties()`.

// Object.create() Example: Creating a new object with a prototype
var person = { name: "Charlie", greet: function() { return "Hello, " + this.name; } };
var newPerson = Object.create(person);
newPerson.name = "David";
console.log(newPerson.greet());  // Outputs: Hello, David

// Object.defineProperty() Example: Adding a new property with custom behavior
var obj = {};
Object.defineProperty(obj, "message", {
    value: "This is a custom property",
    writable: true,
    configurable: true,
    enumerable: true
});
console.log(obj.message);  // Outputs: This is a custom property

// 4) Array Methods
//    * ES5 added new methods to arrays such as `forEach()`, `map()`, `filter()`, `reduce()`, and `some()`.

// Array forEach Example: Iterating through an array
var numbers = [1, 2, 3, 4];
numbers.forEach(function(number) {
    console.log(number);  // Outputs: 1, 2, 3, 4 (one per line)
});

// Array map Example: Transforming an array using map()
var squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers);  // Outputs: [1, 4, 9, 16]

// Array filter Example: Filtering out even numbers
var evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers);  // Outputs: [2, 4]

// 5) Improved Error Handling
//    * ES5 made improvements in error handling by providing the ability to create custom error messages using `Error` objects.
//    * It also introduced better stack traces for debugging.

// Example: Creating a custom error
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log(error.message);  // Outputs: Something went wrong!
    console.log(error.stack);    // Outputs the stack trace
}

// 6) Function Methods
//    * ES5 introduced methods like `bind()`, which allows you to bind a function to a specific context (i.e., the value of `this`).

// bind() Example
var obj = { name: "Sarah" };
function greet() {
    console.log("Hello, " + this.name);
}
var boundGreet = greet.bind(obj);
boundGreet();  // Outputs: Hello, Sarah

// ECMAScript 5 was a major release that improved JavaScript's capabilities for large applications,
// providing better error handling, object manipulation, and array operations.
