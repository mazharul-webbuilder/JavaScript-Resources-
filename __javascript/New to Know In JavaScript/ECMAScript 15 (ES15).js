// 🚀 ECMAScript 15 (Expected - ES15 - ECMAScript 2025)

// 1) **`Array.prototype.at()`**
//    * The `at()` method is proposed to retrieve the element at a given index, allowing for negative indexes to count from the end of the array.
//    * This provides a simpler way to access array elements at arbitrary positions.

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.at(1));  // Outputs: 20
console.log(numbers.at(-1)); // Outputs: 50 (last element)

// 2) **`WeakRef` and `FinalizationRegistry` Enhancements**
//    * Enhancements to `WeakRef` and `FinalizationRegistry` provide better memory management options by allowing developers to register cleanup callbacks when objects are garbage collected.

// Example: Using `FinalizationRegistry`
const registry = new FinalizationRegistry((heldValue) => {
    console.log(`Object with value ${heldValue} was garbage collected.`);
});

let obj = { name: "Example" };
registry.register(obj, "Example");

obj = null;  // After GC, the callback will be triggered.


// 3) **Async Iterators for `ArrayBuffer` and `SharedArrayBuffer`**
//    * ES15 may introduce async iterators for `ArrayBuffer` and `SharedArrayBuffer` to support more efficient reading of binary data asynchronously.

// Example: Async Iterators
async function readBufferAsync(buffer) {
    const reader = new DataView(buffer);
    for await (let byte of reader) {
        console.log(byte);
    }
}

const buffer = new ArrayBuffer(8);
readBufferAsync(buffer);

// 4) **`globalThis` Enhancements**
//    * Additional improvements to `globalThis`, making it more consistent across different environments. This makes it easier to access the global object in any JavaScript environment (browser, Node.js, etc.).

// Example: Using `globalThis`
globalThis.myGlobalVariable = "Accessible anywhere!";
console.log(myGlobalVariable); // Outputs: Accessible anywhere!


// 5) **Pattern Matching**
//    * Pattern matching proposals are being considered for more powerful and readable code, similar to pattern matching in languages like Rust and Swift. This could simplify complex conditional logic and improve code readability.

// Example: Pattern Matching (Proposed Syntax)
const result = match(value) {
    when (x > 10) => "Greater than 10",
        when (x < 10) => "Less than 10",
else => "Equal to 10"
};

console.log(result);  // Outputs based on the value of 'x'


// 6) **String.prototype.replaceAll()**
//    * Although this method was added in ES2021, ES15 may enhance or standardize its behavior for better use cases, including support for global matching.

let str = "hello world, world!";
str = str.replaceAll("world", "JavaScript");
console.log(str);  // Outputs: "hello JavaScript, JavaScript!"


// 7) **Function Bind Enhancements**
//    * Proposed improvements to the `bind()` method, allowing for more flexible and optimized function bindings, including support for `this` context in new scenarios.

// Example: Function Bind (Enhancement)
const greet = function () {
    console.log(`Hello, ${this.name}!`);
};

const person = { name: "Alice" };
const greetPerson = greet.bind(person);
greetPerson();  // Outputs: "Hello, Alice!"


// Conclusion:
// ECMAScript 15 (ES2025) is expected to bring some exciting features that could improve the developer experience significantly. These include better memory management with `WeakRef` and `FinalizationRegistry`, the ability to access array elements using `at()`, async iteration support for binary data buffers, and more powerful pattern matching syntax. Additionally, the `globalThis` object will likely be enhanced for consistent global object access across environments.
