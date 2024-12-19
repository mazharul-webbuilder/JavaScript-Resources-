// 🚀 ECMAScript 8 (Released: June 2017)

// Key Features:

// 1) Async/Await
//    * `async` and `await` make working with asynchronous code easier, improving readability and reducing callback hell.
async function fetchData() {
    const data = await new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });
    console.log(data);  // Outputs: Data fetched
}

fetchData();  // Call the async function

// 2) Object.entries() and Object.values()
//    * `Object.entries()` returns an array of key-value pairs from an object.
//    * `Object.values()` returns an array of the values of the object's properties.

// Example: Using Object.entries()
const person = { name: "Alice", age: 25 };
console.log(Object.entries(person));  // Outputs: [["name", "Alice"], ["age", 25]]

// Example: Using Object.values()
console.log(Object.values(person));  // Outputs: ["Alice", 25]

// 3) String.padStart() and String.padEnd()
//    * `padStart()` and `padEnd()` allow you to pad strings to a specific length with a given character.

let str = "5";
console.log(str.padStart(3, "0"));  // Outputs: "005"
console.log(str.padEnd(3, "0"));    // Outputs: "500"

// Example: Padding with different characters
let str2 = "abc";
console.log(str2.padStart(6, "-"));  // Outputs: "--abc"
console.log(str2.padEnd(6, "-"));    // Outputs: "abc--"

// 4) Object.getOwnPropertyDescriptors()
//    * `Object.getOwnPropertyDescriptors()` returns all property descriptors of an object.
//    * It can be useful for copying or defining new properties on objects.

const obj = { name: "Bob", age: 30 };
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
// Outputs:
// {
//   name: { value: 'Bob', writable: true, enumerable: true, configurable: true },
//   age: { value: 30, writable: true, enumerable: true, configurable: true }
// }

// 5) SharedArrayBuffer (for advanced concurrent programming)
//    * `SharedArrayBuffer` allows for the creation of a memory buffer that can be shared across threads for better performance in concurrency (especially in Web Workers).
//    * This is mostly useful for low-level parallel programming and Web Workers, but it is not frequently used in typical JavaScript code.

// Example: (Shared memory buffer - for demonstration purposes, but it requires certain browser support and use cases for Web Workers)
// let sharedBuffer = new SharedArrayBuffer(1024);  // Creates a buffer of 1024 bytes.
// let uint8View = new Uint8Array(sharedBuffer);  // Creates a view into the shared buffer.

// ECMAScript 8 (ES8) introduced major enhancements for working with asynchronous operations, objects, and strings,
// as well as some low-level performance improvements for shared memory and concurrent programming.
