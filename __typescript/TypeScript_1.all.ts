// 🚀 TypeScript 1.0 (First Stable Release)

// 1) Type Annotations
//    * TypeScript introduced type annotations, allowing you to specify types for variables, functions, and objects.

// Example: Type Annotations
let age: number = 25;
let name: string = "John";
let isActive: boolean = true;

// Function with type annotations
function greet(person: string): string {
    return `Hello, ${person}!`;
}
console.log(greet("Alice"));

// 2) Type Inference
//    * TypeScript automatically infers types when no explicit type is provided, enhancing developer experience.

// Example: Type Inference
let count = 10;  // TypeScript infers 'count' to be of type 'number'

// 3) Interfaces
//    * TypeScript introduced interfaces to define the shape of objects and ensure structure consistency.

// Example: Interfaces
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 30
};

// 4) Enums
//    * TypeScript introduced enums, allowing developers to define a set of named constants.

// Example: Enums
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}

let currentStatus: Status = Status.Active;
console.log(currentStatus);  // Outputs: ACTIVE

// 5) Type Aliases
//    * TypeScript introduced type aliases, allowing you to create a custom type.

// Example: Type Aliases
type ID = string | number;

let userId: ID = 123;
userId = "abc";

// 6) Classes and Object-Oriented Features
//    * TypeScript introduced basic class syntax, allowing for object-oriented programming with support for inheritance, constructors, and access modifiers.

// Example: Classes
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const person1 = new Person("John", 25);
person1.greet();  // Outputs: Hello, my name is John.

// 7) Function Types
//    * TypeScript allowed defining function types using type annotations, enhancing flexibility in function signatures.

// Example: Function Types
function add(a: number, b: number): number {
    return a + b;
}

const result = add(10, 5);
console.log(result);  // Outputs: 15

// 8) Type Assertions
//    * TypeScript introduced type assertions, allowing developers to tell the compiler to treat a value as a specific type when necessary.

// Example: Type Assertions
let someValue: any = "Hello";
let strLength: number = (<string>someValue).length;
    console.log(strLength);  // Outputs: 5

    // Conclusion: TypeScript 1.0 added essential features such as type annotations, interfaces, enums, type aliases, classes, function types, and type assertions, bringing strong typing and object-oriented capabilities to JavaScript.
