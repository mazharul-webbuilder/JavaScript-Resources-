// 🚀 TypeScript 4.0 (Major Release with New Features and Enhancements)

// 1) **Variadic Tuple Types**
//    * TypeScript 4.0 introduced variadic tuple types, allowing you to define tuples that can have a variable number of elements of different types.

type StringNumberTuple = [string, ...number[]];

const example: StringNumberTuple = ["Hello", 1, 2, 3];
console.log(example);

// 2) **Labeled Tuple Elements**
//    * TypeScript 4.0 introduced labeled tuple elements, which provide more descriptive names for tuple elements, improving readability.

type Point = [x: number, y: number];

const point: Point = [10, 20];
console.log(point);

// 3) **Unknown on Catch Clauses**
//    * TypeScript 4.0 changed the default type of error variables in `catch` clauses from `any` to `unknown`, improving type safety and encouraging type checks.

try {
    throw new Error("Something went wrong!");
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log(error.message);  // Safe to access properties of 'error'
    }
}

// 4) **`override` Keyword**
//    * TypeScript 4.0 introduced the `override` keyword, which ensures that methods in a subclass override methods from the base class correctly, providing more safety.

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    override speak() {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak();  // Outputs: Dog barks

// 5) **`const` Assertions**
//    * TypeScript 4.0 introduced `const` assertions, which allow you to create more literal types from arrays, objects, and other literals.

let colors = ["red", "green", "blue"] as const;
// colors[0] = "yellow";  // Error: Cannot assign to '0' because it is a read-only property

// 6) **Template Literal Types**
//    * TypeScript 4.0 added support for template literal types, allowing you to create types based on string literals and template strings.

type Greeting = `Hello, ${string}`;

let greet: Greeting = "Hello, World!";
greet = "Hello, Alice";  // Valid
// greet = "Goodbye";  // Error: Type 'Goodbye' is not assignable to type 'Greeting'

// 7) **Class Property Inference from Constructor Parameters**
//    * TypeScript 4.0 improved class property inference, automatically inferring types for class properties based on constructor parameters.

class Person {
    constructor(public name: string, public age: number) {}
}

const person = new Person("John", 30);
console.log(person.name, person.age);  // Outputs: John 30

// 8) **Default `unknown` Type for Catch Clause Variables**
//    * TypeScript 4.0 introduced a default `unknown` type for variables caught in `catch` blocks, encouraging developers to perform explicit type checks.

try {
    throw new Error("An error occurred");
} catch (err: unknown) {
    if (err instanceof Error) {
        console.error(err.message);  // Safe to access properties of 'Error'
    }
}

// 9) **ESModule Support for Node.js**
//    * TypeScript 4.0 improved support for ES modules, allowing you to use `import` and `export` syntax more seamlessly in Node.js projects.

{
    // In tsconfig.json:
    "compilerOptions": {
    "module": "ESNext",
        "target": "ESNext"
}
}

import { MyClass } from "./myClass";

// 10) **Tuple with Spread in Function Signatures**
//    * TypeScript 4.0 added better support for using spread syntax in function signatures for tuples, allowing for more flexible and accurate typing.

function logMessages(...messages: [string, ...string[]]) {
    console.log(messages);
}

logMessages("Hello", "World", "TypeScript");  // Valid

// Conclusion: TypeScript 4.0 introduced several powerful features such as variadic tuple types, `override` keyword, template literal types,
// and improvements for error handling, spread syntax in functions, and ES module support, making it a more robust tool for modern JavaScript development.
