// 🚀 ECMAScript 4 (Proposed, but not officially released)

// Key Features:
// 1) Classes and Inheritance
//    * ECMAScript 4 introduced class syntax for defining classes, allowing for object-oriented programming with a cleaner syntax.
//    * Classes in ES4 would support inheritance and method definitions.

// Class Definition Example
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise.`;
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

// 2) Strong Typing
//    * ES4 proposed introducing type annotations for variables, allowing for stronger typing to reduce errors.

// Strong Typing Example (Hypothetical ES4 syntax)
var message: string = "Hello, ECMAScript 4!";
console.log(message);  // Outputs: Hello, ECMAScript 4!

// 3) Modules
//    * ES4 proposed a module system for better organization and encapsulation of code, similar to what ES6 later introduced.

// Hypothetical Module Example
// module math {
//     export function add(a, b) {
//         return a + b;
//     }
// }
// console.log(math.add(3, 4));  // Outputs: 7

// 4) Optional Function Arguments and Default Parameters
//    * ES4 proposed better support for optional function arguments and default values.

// Function with Default Parameters (Hypothetical ES4 syntax)
function greet(name: string = "Guest") {
    console.log("Hello, " + name + "!");
}

greet();          // Outputs: Hello, Guest!
greet("Alice");   // Outputs: Hello, Alice!

// 5) Generics (Similar to TypeScript's Generics)
//    * ES4 proposed adding generic types to functions, allowing for better code reuse and flexibility in typing.

// Generics Example (Hypothetical ES4 syntax)
function identity<T>(value: T): T {
    return value;
}

console.log(identity(42));       // Outputs: 42
console.log(identity("Hello"));  // Outputs: Hello

// ECMAScript 4 was a proposal that introduced concepts that would later influence future versions of JavaScript.
// Although ES4 was never fully adopted, many of its ideas were incorporated into ECMAScript 5 and beyond.
