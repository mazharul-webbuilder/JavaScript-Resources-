// 🚀 ECMAScript 6 (Released: June 2015)

// Key Features:

// 1) Arrow Functions
//    * Arrow functions provide a more concise syntax for writing functions and handle the `this` keyword differently.
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));  // Outputs: Hello, Alice!

// Arrow function with multiple parameters
const sum = (a, b) => a + b;
console.log(sum(3, 5));  // Outputs: 8

// 2) Classes
//    * ES6 introduced class syntax, allowing for a more object-oriented approach to defining classes and inheritance.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        return `${this.name} the ${this.breed} barks.`;
    }
}

const dog = new Dog("Rex", "Golden Retriever");
console.log(dog.speak());  // Outputs: Rex the Golden Retriever barks.

// 3) Template Literals
//    * Template literals allow for easier string interpolation and multi-line strings.
let name = "Bob";
let message = `Hello, ${name}!
How are you today?`;
console.log(message);  // Outputs: Hello, Bob!
//          How are you today?

// 4) Promises
//    * Promises provide a cleaner way to work with asynchronous operations.
const fetchData = new Promise((resolve, reject) => {
    let success = true;  // Simulate a successful operation
    if (success) {
        resolve("Data fetched successfully!");
    } else {
        reject("Error fetching data.");
    }
});

fetchData
    .then((result) => console.log(result))  // Outputs: Data fetched successfully!
    .catch((error) => console.log(error));  // Will not be triggered in this case

// 5) Let and Const
//    * `let` and `const` provide block-scoped variable declarations, which are more predictable than `var`.
let number = 10;  // 'let' allows reassignment
number = 20;
console.log(number);  // Outputs: 20

const pi = 3.14;  // 'const' creates a constant that cannot be reassigned
// pi = 3.14159;  // Uncaught TypeError: Assignment to constant variable.

// 6) Destructuring Assignment
//    * Destructuring allows for unpacking values from arrays or objects into distinct variables.
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name);  // Outputs: Alice
console.log(age);   // Outputs: 25

const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor);   // Outputs: red
console.log(secondColor);  // Outputs: green

// 7) Default Parameters
//    * Functions can have default values for parameters if no argument is provided.
function greetWithPrefix(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greetWithPrefix());       // Outputs: Hello, Guest!
console.log(greetWithPrefix("Alice"));  // Outputs: Hello, Alice!

// 8) Modules
//    * ES6 introduced modules, making it easier to split JavaScript code into reusable pieces.
import { greet } from './greet.js';  // Importing a function from another file (assuming 'greet.js' exists)
console.log(greet("John"));  // Outputs: Hello, John!

// 9) Spread Operator
//    * The spread operator `...` allows for expanding arrays or objects.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);  // Outputs: [1, 2, 3, 4, 5]

// Spread with objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1, city: "New York" };
console.log(obj2);  // Outputs: { name: "Alice", age: 25, city: "New York" }

// 10) For...of Loop
//    * The `for...of` loop provides an easier way to iterate over iterable objects like arrays.
const numbers = [1, 2, 3, 4];
for (const num of numbers) {
    console.log(num);  // Outputs: 1, 2, 3, 4 (one per line)
}

// ECMAScript 6 introduced major improvements to the language that made JavaScript easier to work with,
// including better support for object-oriented programming, asynchronous code, and cleaner syntax.
