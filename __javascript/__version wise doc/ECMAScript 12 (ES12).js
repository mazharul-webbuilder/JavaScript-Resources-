// 🚀 ECMAScript 12 (Released: June 2021)

// Key Features:

// 1) Logical Assignment Operators (&&=, ||=, ??=)
//    * These operators combine logical operators with assignment, providing a shorthand for common patterns.

// Example: Using Logical AND Assignment (&&=)
let x = null;
x &&= "Assigned Value";
console.log(x);  // Outputs: null (since x was null, no assignment)

// Example: Using Logical OR Assignment (||=)
let y = 0;
y ||= "Default Value";
console.log(y);  // Outputs: "Default Value" (since y was falsy, the assignment happens)

// Example: Using Nullish Coalescing Assignment (??=)
let z = undefined;
z ??= "Default Value";
console.log(z);  // Outputs: "Default Value" (since z was nullish)

// 2) Numeric Separators (_)
//    * Numeric separators allow you to insert underscores (_) into numeric literals to make them more readable.

// Example: Using Numeric Separators
const bigNumber = 1_000_000_000;
console.log(bigNumber);  // Outputs: 1000000000

const binaryNumber = 0b1010_1011_1100_1101;
console.log(binaryNumber);  // Outputs: 43981 (binary to decimal)

// 3) Promise.any()
//    * `Promise.any()` takes multiple promises and resolves as soon as the first promise resolves successfully.
//    * It returns the first resolved value or throws an `AggregateError` if all promises reject.

// Example: Using Promise.any()
const promise1 = Promise.reject("Error");
const promise2 = Promise.resolve("Success");
const promise3 = Promise.reject("Another Error");

Promise.any([promise1, promise2, promise3]).then(result => {
    console.log(result);  // Outputs: Success (because promise2 resolves first)
}).catch(error => {
    console.log(error);
});

// 4) WeakRefs
//    * `WeakRef` allows you to hold a "weak" reference to an object, meaning it doesn't prevent garbage collection.
//    * Useful for caching mechanisms or for scenarios where you don't want to prevent objects from being collected.

let myObject = { name: "Alice" };
const weakRef = new WeakRef(myObject);

myObject = null;  // Now the object can be garbage collected
console.log(weakRef.deref());  // Outputs: undefined (if the object is garbage collected)

// 5) FinalizationRegistry
//    * FinalizationRegistry allows you to register cleanup callbacks that are invoked when objects are garbage collected.

// Example: Using FinalizationRegistry
const finalizationRegistry = new FinalizationRegistry((value) => {
    console.log(`Object with value ${value} has been garbage collected.`);
});

let obj = { id: 1 };
finalizationRegistry.register(obj, "Object 1");

// Simulate object being garbage collected
obj = null;  // The callback will be invoked when the object is garbage collected

// 6) String.prototype.replaceAll()
//    * `replaceAll()` replaces all occurrences of a substring in a string with a given value.

// Example: Using String.prototype.replaceAll()
const text = "Hello, world! Hello, universe!";
const newText = text.replaceAll("Hello", "Hi");
console.log(newText);  // Outputs: Hi, world! Hi, universe!

// 7) Array.prototype.sort() stability
//    * In ES12, the `.sort()` method is guaranteed to be stable, meaning that elements which compare as equal
//      will maintain their relative order.

// Example: Using Array.prototype.sort() with stability
const items = [
    { name: "Bob", age: 30 },
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 25 },
];

const sortedItems = items.sort((a, b) => a.age - b.age);
console.log(sortedItems);
// Outputs:
// [
//   { name: "Charlie", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Alice", age: 30 }
// ]
// Alice and Bob maintain their relative order because sort is stable.

// ECMAScript 12 (ES12) introduced new operators, methods, and optimizations,
// making JavaScript more efficient, readable, and powerful.
