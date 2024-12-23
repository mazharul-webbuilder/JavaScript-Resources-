// 🚀 ECMAScript 5.1 (Released: June 2011)

// Key Features:
// 1) Clarifications and Bug Fixes
//    * ECMAScript 5.1 clarified ambiguities and provided fixes for inconsistencies across JavaScript engines.

// 2) JSON Support (Clarified in ES5.1)
//    * The `JSON.parse()` and `JSON.stringify()` methods were clarified for better consistency in different environments.

// Example: Using JSON methods (clarified in ES5.1)
var jsonString = '{"name": "Alice", "age": 25}';
var parsedData = JSON.parse(jsonString);
console.log(parsedData.name);  // Outputs: Alice

var object = { name: "Bob", age: 30 };
var jsonStringified = JSON.stringify(object);
console.log(jsonStringified);  // Outputs: {"name":"Bob","age":30}

// 3) Improved Behavior of Array Methods (Clarified in ES5.1)
//    * ES5.1 clarified edge cases for array methods like `forEach()`, `map()`, and `filter()`.

// Example: Using Array.forEach() with non-array objects (clarified in ES5.1)
var obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
Array.prototype.forEach.call(obj, function(item) {
    console.log(item);  // Outputs: a, b, c
});

// 4) Strict Mode (Clarified and Fixed in ES5.1)
//    * The specification around strict mode was refined in ES5.1, ensuring more consistent behavior across implementations.

// Example: Strict mode clarification in ES5.1
"use strict";  // Enables strict mode for the entire script or function

try {
    undeclaredVariable = "This will throw an error in strict mode";
} catch (e) {
    console.log(e.message);  // Outputs: "undeclaredVariable is not defined"
}

// 5) Object Methods (No New Features, but Clarified in ES5.1)
//    * The `Object.create()`, `Object.defineProperty()`, and other object-related methods were clarified in ES5.1.

// Example: Using Object.defineProperty() (clarified in ES5.1)
var obj = {};
Object.defineProperty(obj, "message", {
    value: "This is a custom property",
    writable: true,
    configurable: true,
    enumerable: true
});
console.log(obj.message);  // Outputs: This is a custom property

// ECMAScript 5.1 was primarily a bug-fix and clarification release that improved the consistency of JavaScript's behavior
// across different engines, particularly in how JSON parsing, array methods, and strict mode worked.
