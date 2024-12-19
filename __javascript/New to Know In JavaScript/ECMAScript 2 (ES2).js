// 🚀 ECMAScript 2 (Released: June 1998)

// Key Features:
// 1) Standardization and Refinements
//    * ECMAScript 2 was primarily a bug-fix and specification update to ECMAScript 1. 
//      It refined the behavior of certain language elements, ensuring consistency across different JavaScript engines.

// 2) Improved Error Handling (Clarified Specification)
//    * The `try`, `catch`, and `throw` statements were refined for better consistency.

// Improved Error Handling (Clarified Specification)
try {
    throw new Error("This is a custom error in ECMAScript 2!");
} catch (error) {
    console.log(error.message);  // Outputs: This is a custom error in ECMAScript 2!
}

// 3) Minor Modifications to Built-In Methods
//    * Some built-in functions were clarified for more consistent behavior across environments.

// Example using isNaN()
console.log(isNaN("100"));     // Outputs: false
console.log(isNaN("Hello"));   // Outputs: true

// Example using parseInt()
console.log(parseInt("42px")); // Outputs: 42 (parses until it hits a non-digit)

// ECMAScript 2 focused on standardizing the JavaScript language and its behavior to ensure consistency.
