// 🚀 ECMAScript 11 (Released: June 2020)

// Key Features:

// 1) Optional Chaining (?.)
//    * Optional chaining allows you to safely access deeply nested properties of an object,
//      returning `undefined` instead of throwing an error if any part of the chain is `null` or `undefined`.

// Example: Using Optional Chaining
const person = { name: { first: "Alice", last: "Smith" } };
console.log(person?.name?.first);  // Outputs: Alice
console.log(person?.address?.street);  // Outputs: undefined (no error)

// 2) Nullish Coalescing Operator (??)
//    * The `??` operator returns the right-hand operand when the left-hand operand is `null` or `undefined`,
//      but does not consider other falsy values like `0`, `NaN`, or `false`.

let value = null;
console.log(value ?? "Default value");  // Outputs: Default value

let anotherValue = 0;
console.log(anotherValue ?? "Default value");  // Outputs: 0 (not "Default value")

// 3) Promise.allSettled()
//    * `Promise.allSettled()` is a new method that returns a promise that resolves after all input promises
//      have either resolved or rejected, providing an array of results with the status of each promise.

const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Error");

Promise.allSettled([promise1, promise2]).then(results => {
    console.log(results);
    // Outputs:
    // [
    //   { status: "fulfilled", value: "Success" },
    //   { status: "rejected", reason: "Error" }
    // ]
});

// 4) GlobalThis
//    * `globalThis` provides a standardized way to reference the global object,
//      which is different in various environments like browser (window), Node.js (global), etc.

console.log(globalThis);  // Outputs the global object in the current environment

// 5) BigInt
//    * `BigInt` is a new numeric primitive that can represent integers larger than 2^53 - 1,
//      which is the limit of the `Number` type.

const largeNumber = BigInt(1234567890123456789012345678901234567890);
console.log(largeNumber);  // Outputs: 1234567890123456789012345678901234567890n

// Example: Operations with BigInt
const bigIntSum = largeNumber + BigInt(10);
console.log(bigIntSum);  // Outputs: 1234567890123456789012345678901234567900n

// 6) Import.meta
//    * `import.meta` allows you to access metadata about the current module.
//    * This is useful for dynamically importing modules or getting the URL of the current module.

console.log(import.meta.url);  // Outputs: URL of the current module

// ECMAScript 11 (ES11) introduced useful features such as optional chaining, nullish coalescing,
// and BigInt to make working with JavaScript simpler, cleaner, and more powerful.
