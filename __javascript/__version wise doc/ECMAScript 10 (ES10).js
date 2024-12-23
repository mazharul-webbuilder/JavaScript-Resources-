// 🚀 ECMAScript 10 (Released: June 2019)

// Key Features:

// 1) Array.prototype.flat() and Array.prototype.flatMap()
//    * `flat()` flattens an array by a specified depth (default depth is 1).
//    * `flatMap()` maps each element of an array using a function and then flattens the result.

// Example: Using Array.prototype.flat()
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat());  // Outputs: [1, 2, 3, 4, [5, 6]]
console.log(nestedArray.flat(2)); // Outputs: [1, 2, 3, 4, 5, 6]

// Example: Using Array.prototype.flatMap()
const nums = [1, 2, 3];
console.log(nums.flatMap(num => [num, num * 2]));
// Outputs: [1, 2, 2, 4, 3, 6] (map and flatten)

// 2) Object.fromEntries()
//    * `Object.fromEntries()` converts an array of key-value pairs into an object.

// Example: Using Object.fromEntries()
const entries = [['name', 'Alice'], ['age', 30]];
const person = Object.fromEntries(entries);
console.log(person);  // Outputs: { name: "Alice", age: 30 }

// 3) String.prototype.trimStart() and String.prototype.trimEnd()
//    * `trimStart()` removes whitespace from the beginning of a string.
//    * `trimEnd()` removes whitespace from the end of a string.

// Example: Using String.prototype.trimStart()
const str1 = "   Hello";
console.log(str1.trimStart());  // Outputs: "Hello"

// Example: Using String.prototype.trimEnd()
const str2 = "World   ";
console.log(str2.trimEnd());  // Outputs: "World"

// 4) Optional Catch Binding
//    * In earlier versions, the error object in a `catch` block was required, even if not used.
//    * Now you can omit it if it's not necessary.

// Example: Optional Catch Binding
try {
    throw new Error("Something went wrong!");
} catch {
    console.log("Error handled");  // Outputs: Error handled (no need for error variable)
}

// 5) Symbol.prototype.description
//    * `Symbol.prototype.description` allows you to directly access the description of a Symbol.

// Example: Using Symbol.prototype.description
const sym = Symbol("mySymbol");
console.log(sym.description);  // Outputs: "mySymbol"

// ECMAScript 10 (ES10) improved JavaScript with helpful methods for arrays, strings, and symbols,
// as well as simplifying error handling in `catch` blocks. These additions enhance code readability and usability.
