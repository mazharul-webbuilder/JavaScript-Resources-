// 🚀 ECMAScript 14 (Expected - ES14 - ECMAScript 2024)

// 1) `Object.groupBy()` and `Map.groupBy()`
//    * New methods to group elements by a specific criterion. This provides a clean and concise way to organize data in objects or maps.

// Example: Object.groupBy()
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

const grouped = Object.groupBy(people, person => person.age);
console.log(grouped);
// Expected Output:
// {
//   25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
//   30: [{ name: "Bob", age: 30 }]
// }

// Example: Map.groupBy()
const map = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 1]
]);

const groupedMap = Map.groupBy(map, value => value);
console.log(groupedMap);
// Expected Output:
// Map(2) {
//   1 => ['A', 'C'],
//   2 => ['B']
// }


// 2) `Promise.withResolvers()`
//    * A new method that allows you to create a promise and directly access its resolve and reject functions.

// Example: Promise.withResolvers()
const { resolve, reject, promise } = Promise.withResolvers();

promise
    .then(result => console.log(result))  // Outputs: Success!
    .catch(error => console.log(error));

resolve("Success!");
// or reject("Failure!");


// 3) Regular Expression `/v` Flag
//    * The `/v` flag introduces advanced capabilities for regular expressions, supporting more expressive Unicode property escapes and pattern matching.

// Example: Regular Expression `/v` Flag
const regex = /\p{Script=Latin}+/v;
const text = 'Hello World!';
console.log(regex.test(text));  // Outputs: true


// 4) Record and Tuple Data Structures
//    * Record and Tuple are immutable data structures introduced for better performance and reliability in certain data handling scenarios.

// Example: Record
const record = Record({ name: "John", age: 30 });
console.log(record.name);  // Outputs: John

// Example: Tuple
const tuple = Tuple("apple", "banana", "cherry");
console.log(tuple[1]);  // Outputs: banana


// 5) Enhanced ArrayBuffer and SharedArrayBuffer Support
//    * ECMAScript 14 introduces improvements to `ArrayBuffer` and `SharedArrayBuffer` for better handling of binary data and shared memory between threads.

// Example: ArrayBuffer and DataView
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer);
view.setInt32(0, 42);
console.log(view.getInt32(0));  // Outputs: 42


// 6) Shebang (`#!`) Support
//    * JavaScript files can now include a shebang (`#!`) line, allowing them to be executed directly in environments that support it (such as Node.js).

// Example: Shebang
// At the top of a JavaScript file
#!/usr/bin/env node
console.log('Hello, world!');
// This will allow the file to be run as an executable script in Unix-like environments.


/*
    Conclusion:
    ECMAScript 14 (ES2024) is expected to introduce several new and powerful features such as the `groupBy()` methods for grouping data, the `Promise.withResolvers()` method for cleaner asynchronous code, a new `/v` flag for regular expressions, immutable `Record` and `Tuple` data structures, and improvements to `ArrayBuffer` and `SharedArrayBuffer`. Additionally, JavaScript will now support the shebang (`#!`) for executable scripts.
*/
