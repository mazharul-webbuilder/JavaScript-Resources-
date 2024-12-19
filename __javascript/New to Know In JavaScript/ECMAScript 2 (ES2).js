// 🚀 ECMAScript 2 (Released: June 1998)

// Key Features:

// 1) Standardization and Refinements
//    * ECMAScript 2 was primarily a bug-fix and specification update to ECMAScript 1.
//      It refined the behavior of certain language elements, ensuring consistency across different JavaScript engines.

// 2) Improved Error Handling (Clarified Specification)
//    * The `try`, `catch`, and `throw` statements were refined for better consistency, particularly in handling error objects.
//    * Error handling mechanisms became more predictable and standardized across implementations.

try {
    throw new Error("This is a custom error in ECMAScript 2!");
} catch (error) {
    console.log(error.message);  // Outputs: This is a custom error in ECMAScript 2!
}

// 3) Minor Modifications to Built-In Methods
//    * Some built-in functions were clarified to ensure consistent behavior across different environments.
//    * `isNaN()` and `parseInt()` were more clearly defined and their behaviors standardized across JavaScript engines.

// Example using isNaN()
console.log(isNaN("100"));     // Outputs: false (100 is a number, so it's not NaN)
console.log(isNaN("Hello"));   // Outputs: true (Hello is not a number, so it's NaN)

// Example using parseInt()
console.log(parseInt("42px")); // Outputs: 42 (parses until it hits a non-digit)

// 4) Bug Fixes and Clarifications
//    * ECMAScript 2 focused on bug fixes and clarifying existing methods and syntax.
//    * It addressed inconsistencies in the ECMAScript 1 specification, making JavaScript more stable and predictable.


// Summary:
// ECMAScript 2 primarily refined the original specification introduced in ECMAScript 1.
// It focused on standardizing language features, improving error handling, and clarifying certain built-in methods like `isNaN()` and `parseInt()`.
// It laid the groundwork for future versions by making JavaScript more consistent across different platforms.
