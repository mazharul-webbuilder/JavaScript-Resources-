// 🚀 TypeScript 2.0 (Major Release with Enhanced Type System)

// 1) Strict Null Checks
//    * TypeScript 2.x introduced `strictNullChecks`, ensuring that `null` and `undefined` are not assignable to other types unless explicitly allowed.

// Example: Strict Null Checks
let nullableString: string | null = null;
// nullableString = "Hello";  // Allowed
// nullableString = undefined;  // Error

// 2) Non-nullable Types
//    * With strict null checks enabled, `null` and `undefined` are no longer allowed unless explicitly included in a type.

// Example: Non-nullable Types
let name: string = "Alice";
name = null;  // Error: Type 'null' is not assignable to type 'string'

// 3) Class Property Inference
//    * TypeScript 2.x enhanced class property inference, making it easier to handle and automatically infer types in class constructors.

// Example: Class Property Inference
class Person {
    name: string;
    age = 25;  // Inferred as number

    constructor(name: string) {
        this.name = name;
    }
}

// 4) Readonly and Immutable Types
//    * TypeScript introduced `readonly` properties and arrays, ensuring that values cannot be changed once set.

// Example: Readonly Types
interface Point {
    readonly x: number;
    readonly y: number;
}

let point: Point = { x: 10, y: 20 };
// point.x = 30;  // Error: Cannot assign to 'x' because it is a read-only property

// 5) `--noImplicitAny` Flag
//    * TypeScript 2.x introduced the `--noImplicitAny` flag, which helps prevent implicit `any` types and encourages type safety in the codebase.

// Example: --noImplicitAny
// Without the flag, TypeScript would allow `any` as a fallback type for variables with no type annotation.
// With `--noImplicitAny`, TypeScript will enforce the developer to explicitly define types.

// 6) Interface Merging
//    * TypeScript 2.x improved support for merging interfaces, allowing interfaces to be extended across different parts of a codebase.

// Example: Interface Merging
interface Animal {
    name: string;
}

interface Animal {
    age: number;
}

const dog: Animal = { name: "Buddy", age: 5 };  // Merged interface with properties 'name' and 'age'

// 7) Type Aliases for Functions
//    * TypeScript allowed creating type aliases for functions, improving readability and reusability of function types.

// Example: Type Aliases for Functions
type StringToNumber = (input: string) => number;

const parseInt: StringToNumber = (input) => parseInt(input, 10);
console.log(parseInt("42"));  // Outputs: 42

// 8) TypeScript 2.1: Improved Type Inference for Generics
//    * TypeScript 2.1 enhanced type inference for generics, making it easier to work with generic functions and classes.

// Example: Generic Type Inference
function identity<T>(value: T): T {
    return value;
}

let result = identity(42);  // Inferred type is number

// 9) Union Types and Type Guards
//    * TypeScript 2.x expanded union types and added support for type guards, helping to handle different types more effectively.

// Example: Union Types and Type Guards
function printLength(value: string | string[]) {
    if (typeof value === "string") {
        console.log(value.length);
    } else {
        console.log(value.length);
    }
}

printLength("Hello");
printLength(["apple", "banana"]);

// Conclusion: TypeScript 2.x introduced features like strict null checks, improved class property inference, readonly types, type aliasing for functions, and enhanced support for union types, making the type system more robust and developer-friendly.
