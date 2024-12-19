// 🚀 ECMAScript 6 (Released: June 2015)

// Key Features:

// 1) Arrow Functions
//    * Arrow functions provide a more concise syntax for writing functions and handle the `this` keyword differently.
//    * They are also more readable in cases where anonymous functions are required.
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));  // Outputs: Hello, Alice!

// Arrow function with multiple parameters
const sum = (a, b) => a + b;
console.log(sum(3, 5));  // Outputs: 8

// How it works: Instead of writing "function" keyword, use an arrow `=>` to define the function.
// Arrow functions are also lexically scoped, meaning they keep the `this` value from their context.


// 2) Classes
//    * ES6 introduced class syntax, allowing for a more object-oriented approach to defining classes and inheritance.
//    * `class` makes it easier to create objects and handle inheritance between objects.

class Animal {
    constructor(name) {
        this.name = name;  // The constructor function is called when creating a new instance
    }

    speak() {
        return `${this.name} makes a sound.`; // Method to return the sound made by the animal
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call the constructor of the parent class
        this.breed = breed;  // Additional property specific to Dog
    }

    speak() {
        return `${this.name} the ${this.breed} barks.`;  // Overriding the speak method
    }
}

const dog = new Dog("Rex", "Golden Retriever");
console.log(dog.speak());  // Outputs: Rex the Golden Retriever barks.

// How it works: `class` creates a blueprint for creating objects.
// `constructor()` is used to initialize an object, and methods are defined inside the class.


// 3) Template Literals
//    * Template literals allow for easier string interpolation and multi-line strings.
//    * They help create cleaner and more readable string concatenation.

let userName = "Bob";
let message = `Hello, ${userName}!
How are you today?`;
console.log(message);  // Outputs: Hello, Bob!
//          How are you today?

// How it works: Use backticks `` to define a string, and `${}` to insert expressions/variables directly into the string.


// 4) Promises
//    * Promises provide a cleaner way to work with asynchronous operations, like making network requests.
//    * Promises represent a value that may be available now, or in the future, or never.

const fetchData = new Promise((resolve, reject) => {
    let success = true;  // Simulating a successful operation
    if (success) {
        resolve("Data fetched successfully!");  // When the operation is successful
    } else {
        reject("Error fetching data.");  // When the operation fails
    }
});

fetchData
    .then((result) => console.log(result))  // If successful, log the result
    .catch((error) => console.log(error));  // If failed, log the error

// How it works: A Promise has three states: Pending, Resolved (fulfilled), or Rejected.
// Use `.then()` for success and `.catch()` for errors.
// Promises allow you to avoid nested callbacks, making the code easier to read.


// 5) Let and Const
//    * `let` and `const` provide block-scoped variable declarations, which are more predictable than `var`.
//    * `let` allows reassignment of the variable, while `const` creates constants that cannot be reassigned.

let number = 10;
number = 20;  // Reassigning the value of 'number' is allowed with 'let'
console.log(number);  // Outputs: 20

const pi = 3.14;  // Constants cannot be reassigned after initialization
// pi = 3.14159;  // Uncaught TypeError: Assignment to constant variable.


// How it works: `let` and `const` give you more control over the scope of variables. `let` is used when a variable can change,
// while `const` is used when a variable is meant to remain constant throughout its scope.


// 6) Destructuring Assignment
//    * Destructuring allows for unpacking values from arrays or objects into distinct variables.
//    * This makes code more concise and easier to understand when accessing specific properties or elements.

const person = { name: "Alice", age: 25 };
const { name, age } = person;  // Extracts 'name' and 'age' properties from 'person' object
console.log(name);  // Outputs: Alice
console.log(age);   // Outputs: 25

const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;  // Extracts values from the array into variables
console.log(firstColor);   // Outputs: red
console.log(secondColor);  // Outputs: green


// How it works: Use curly braces `{}` for objects and square brackets `[]` for arrays to extract values
// and assign them to variables in one step, making code cleaner and more readable.


// 7) Default Parameters
//    * Functions can have default values for parameters if no argument is provided.
//    * Default parameters help you avoid undefined errors and handle missing arguments gracefully.

function greetWithPrefix(name = "Guest") {
    return `Hello, ${name}!`;  // Default name is "Guest" if no argument is provided
}

console.log(greetWithPrefix());       // Outputs: Hello, Guest!
console.log(greetWithPrefix("Alice"));  // Outputs: Hello, Alice!

// How it works: In the function definition, you assign a default value to parameters. If the function is called without
// that argument, the default value will be used.


// 8) Modules
//    * ES6 introduced modules, making it easier to split JavaScript code into reusable pieces.
//    * This helps in organizing large codebases into smaller, maintainable files.
//    * Modules provide a way to export variables, functions, classes, or objects from one file and import them into another.
//    * This promotes code reusability, modularity, and separation of concerns.

// Importing a function from another file
import { greet } from './greet.js';  // Importing a function named 'greet' from 'greet.js' file
console.log(greet("John"));  // Outputs: Hello, John!

// How it works:
// 1. **Exporting from a file**: In the source file (e.g., `greet.js`), you need to explicitly export the elements you want to make available for use in other files.
//    You can export functions, variables, classes, or objects using either `export` or `export default`.

// Example of how to export a function in `greet.js`:
// greet.js
export function greet(name) {
    return `Hello, ${name}!`;
}

// 2. **Importing in another file**: In the target file (e.g., your main file), you use the `import` statement to import the exported function or variable.
//    You can import specific functions or variables from the source file or import everything using `*`.

import { greet } from './greet.js';  // Importing a specific named export
// or
// import * as myModule from './greet.js';  // Import everything from the module as 'myModule'

// 3. **Default Exports**: If you want to export a single entity (like a function, object, or class), you can use `export default`.
//    You can then import it without curly braces. You can only have one default export per file.

// Example of how to export a default function in `greet.js`:
export default function greet(name) {
    return `Hello, ${name}!`;
}

// Importing the default export:
import greet from './greet.js';  // No need for curly braces when using default exports

// **Important Notes**:
// - Always remember that the file you're importing from (`greet.js` in this case) needs to be in the same directory or path as specified in the `import` statement.
// - JavaScript modules use relative or absolute paths when importing files.
// - ES6 modules are used in modern JavaScript applications (such as with Node.js or front-end frameworks), and typically require the `.js` extension or file resolution configured in the environment.

// Benefits of using modules:
// - **Code Organization**: By breaking down your code into smaller, reusable modules, you make your codebase more organized and maintainable.
// - **Reusability**: You can import and reuse code across multiple files, which eliminates redundancy and promotes DRY (Don't Repeat Yourself) principles.
// - **Separation of Concerns**: Modules allow you to logically separate different parts of your application into their respective files, making it easier to understand and update individual parts.



// 9) Spread Operator
//    * The spread operator `...` allows for expanding arrays or objects.
//    * It helps combine, copy, or extract values easily.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // Create a new array by expanding 'arr1' and adding additional elements
console.log(arr2);  // Outputs: [1, 2, 3, 4, 5]

const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1, city: "New York" };  // Create a new object by spreading the properties of 'obj1' and adding a new property
console.log(obj2);  // Outputs: { name: "Alice", age: 25, city: "New York" }

// How it works: The spread operator (`...`) allows you to extract and copy the elements of an array or the properties of an object
// into a new array or object.


// 10) For...of Loop
//    * The `for...of` loop provides an easier way to iterate over iterable objects like arrays.
//    * It's simpler and more readable than traditional loops.

const numbers = [1, 2, 3, 4];
for (const num of numbers) {
    console.log(num);  // Outputs: 1, 2, 3, 4 (one per line)
}

// How it works: `for...of` is used to iterate over iterable objects like arrays, strings, and maps, making iteration cleaner and simpler.


// 11) Map and Set
// Map: A collection of key-value pairs where keys can be of any data type.
const map = new Map();
map.set('name', 'Alice');  // Set key-value pair in Map
map.set('age', 25);
console.log(map.get('name'));  // Outputs: Alice

// Set: A collection of unique values (no duplicates allowed)
const set = new Set([1, 2, 3, 4, 5]);
console.log(set.has(3));  // Outputs: true


// How it works:
// `Map` is like an object but can store any data type as the key, while `Set` stores unique values with no duplicates.


// 12) Object.assign()
//    * Object.assign() is used to copy values from one or more source objects into a target object.
//    * It is commonly used for cloning or merging objects.

const objA = { name: "Alice" };
const objB = { age: 25 };
const mergedObj = Object.assign({}, objA, objB);  // Merging objects into a new object
console.log(mergedObj);  // Outputs: { name: "Alice", age: 25 }


// 13) Number methods (e.g., `Number.isFinite()`, `Number.isNaN()`)
//    * Methods for checking if a value is a valid number or not.

console.log(Number.isFinite(42));  // Outputs: true
console.log(Number.isNaN(NaN));  // Outputs: true


// 14) Symbol (new primitive type)
const uniqueID = Symbol('id');
console.log(uniqueID);  // Outputs: Symbol(id)

// ECMAScript 6 introduced major improvements to the language that made JavaScript easier to work with,
// including better support for object-oriented programming, asynchronous code, and cleaner syntax.
