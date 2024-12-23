// 🚀 TypeScript 5.0 (Major Enhancements and New Features)

// 1) **Decorators (Experimental)**
//    * TypeScript 5.0 introduced decorators as an experimental feature, allowing developers to attach metadata to classes, methods, and properties.
//    * Note: Decorators are still an experimental feature and require enabling in the TypeScript configuration file.

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`${propertyKey} method was called with args: ${args}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

class Person {
    @log
    greet(message: string) {
        console.log(`Hello, ${message}`);
    }
}

const person = new Person();
person.greet("World");  // Outputs: greet method was called with args: [ 'World' ], Hello, World

// 2) **`satisfies` Operator**
//    * TypeScript 5.0 introduced the `satisfies` operator to check if a type satisfies a particular constraint without changing the type of an expression.

type Person = { name: string; age: number };

const person: Person = { name: "Alice", age: 30 };
const isPerson = person satisfies { name: string };  // Ensures that 'person' satisfies the 'name' property constraint

console.log(isPerson);  // Outputs: true

// 3) **`import type` for Type-Only Imports**
//    * TypeScript 5.0 introduced the `import type` syntax for specifically importing types without bundling them in the output JavaScript.

import type { Person } from "./types";

function greet(person: Person): string {
    return `Hello, ${person.name}`;
}

// 4) **Template Literal Types Enhancements**
//    * TypeScript 5.0 improved support for template literal types, expanding the range of cases where template literals can be used for type definition.

type Color = "red" | "green" | "blue";
type StyledString = `The color is ${Color}`;

let style: StyledString = "The color is red";
style = "The color is blue";  // Valid
// style = "The color is yellow";  // Error: Type '"The color is yellow"' is not assignable to type 'StyledString'

// 5) **`keyof` and `in` Type Narrowing Enhancements**
//    * TypeScript 5.0 improved narrowing with `keyof` and `in` for better type inference in complex types.

type PersonDetails = { name: string; age: number; job: string };

function getProperty<T extends keyof PersonDetails>(obj: PersonDetails, key: T) {
    return obj[key];
}

const personDetails: PersonDetails = { name: "Alice", age: 30, job: "Engineer" };
console.log(getProperty(personDetails, "name"));  // Outputs: Alice

// 6) **`readonly` Tuple and Array Types Improvements**
//    * TypeScript 5.0 improved support for `readonly` tuple and array types to ensure immutability.

const readonlyArray: readonly number[] = [1, 2, 3];
// readonlyArray.push(4);  // Error: Property 'push' does not exist on type 'readonly number[]'

const readonlyTuple: readonly [string, number] = ["Alice", 30];
// readonlyTuple[0] = "Bob";  // Error: Index signature in type 'readonly [string, number]' only permits reading

// 7) **Enhanced Type Inference for `const` Assertions**
//    * TypeScript 5.0 enhanced type inference for `const` assertions, making it more intuitive for developers to work with literal types derived from constant values.

const color = "red" as const;
const colors = ["red", "green", "blue"] as const;  // Type is inferred as readonly ["red", "green", "blue"]

// 8) **`constructor` Signature for Function Types**
//    * TypeScript 5.0 improved the handling of constructor signatures in function types, making it easier to specify types for functions that create objects.

type PersonConstructor = new (name: string, age: number) => PersonDetails;

const personFactory: PersonConstructor = class {
    constructor(public name: string, public age: number) {}
};

const personInstance = new personFactory("Alice", 30);
console.log(personInstance.name, personInstance.age);  // Outputs: Alice 30

// 9) **`Async` Iterators and Generators**
//    * TypeScript 5.0 improved support for `async` iterators and generators, allowing more seamless integration with async flows.

async function* asyncGenerator() {
    yield "Hello";
    yield "World";
}

(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value);  // Outputs: Hello, World
    }
})();

// 10) **More Flexible `type` Assertions**
//    * TypeScript 5.0 enhanced type assertions, allowing for more flexibility and accuracy when converting between types.

const obj: any = { name: "Alice", age: 30 };
const typedObj = obj as { name: string; age: number };
console.log(typedObj.name, typedObj.age);  // Outputs: Alice 30

// Conclusion: TypeScript 5.0 introduced major enhancements, such as decorators, `satisfies` operator, async generators, `readonly` types, improved type assertions, and better template literal support, making TypeScript more powerful and developer-friendly for modern JavaScript applications.
