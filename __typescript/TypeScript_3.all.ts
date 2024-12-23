// 🚀 TypeScript 3.0 (Major Improvements to the Type System and Features)

// 1) Project References
//    * TypeScript 3.x introduced project references, allowing you to manage large TypeScript codebases with multiple projects that depend on each other.

// Example: Project References
// In tsconfig.json of a project:
{
    "compilerOptions": {
    "composite": true
},
    "references": [
    { "path": "../other-project" }
]
}

// 2) Improved Type Inference for Conditional Types
//    * TypeScript 3.0 improved type inference, specifically for conditional types, making them more powerful and flexible in type checking.

// Example: Conditional Types
type IsString<T> = T extends string ? "Yes" : "No";

let check1: IsString<string> = "Yes";  // Valid
let check2: IsString<number> = "No";  // Valid

// 3) Tuple Types with Spread Syntax
//    * TypeScript 3.x added support for tuple types with the spread syntax, making it easier to work with tuples and arrays.

// Example: Tuple Types with Spread Syntax
type Tuple = [number, ...string[]];  // A tuple that starts with a number followed by zero or more strings

const tuple: Tuple = [42, "Hello", "World"];
console.log(tuple);

// 4) `--noImplicitThis` Flag
//    * TypeScript introduced the `--noImplicitThis` flag, which ensures that `this` is properly typed in functions, reducing potential errors when referring to `this`.

// Example: --noImplicitThis
function foo(this: string) {
    return this.length;  // Error if 'this' is not of type 'string'
}

// 5) `readonly` Array Types
//    * TypeScript 3.x introduced more support for `readonly` array types, ensuring immutability when working with arrays.

// Example: `readonly` Array Types
const nums: readonly number[] = [1, 2, 3];
// nums.push(4);  // Error: Property 'push' does not exist on type 'readonly number[]'

// 6) Custom JSX Factories
//    * TypeScript 3.x introduced the ability to define a custom JSX factory function, allowing greater flexibility when working with JSX in TypeScript.

// Example: Custom JSX Factory
declare function h(type: string, props: any, ...children: any[]): any;

const element = <h div={{}}>{ "Hello, World!" }</h>;  // Uses the custom 'h' function for JSX generation

// 7) TypeScript 3.1: `--skipLibCheck` Flag
//    * TypeScript 3.1 introduced the `--skipLibCheck` flag, which skips type checking of declaration files, speeding up compilation for larger projects.

// Example: --skipLibCheck
// In tsconfig.json:
{
    "compilerOptions": {
    "skipLibCheck": true
}
}

// 8) `unknown` Type
//    * TypeScript 3.x introduced the `unknown` type, which is safer than `any` and forces developers to perform type checks before working with the value.

// Example: `unknown` Type
let value: unknown = "Hello";
if (typeof value === "string") {
    console.log(value.length);  // Safe access
}

// 9) Non-null Assertion Operator (!)
//    * TypeScript 3.x introduced the non-null assertion operator (`!`), which tells the compiler that a value is not `null` or `undefined`.

// Example: Non-null Assertion Operator
let value: string | null = "Hello";
console.log(value!.length);  // The '!' asserts that value is not null

// 10) `keyof` and `in` Type Queries
//    * TypeScript 3.x added improved support for `keyof` and `in` type queries, making it easier to work with keys of types and indexed access types.

// Example: `keyof` and `in` Type Queries
interface Person {
    name: string;
    age: number;
}

type PersonKey = keyof Person;  // "name" | "age"
let key: PersonKey = "name";  // Valid
// key = "address";  // Error: Type '"address"' is not assignable to type 'PersonKey'

// Conclusion: TypeScript 3.x brought significant improvements like project references, conditional types, spread syntax for tuples, `readonly` arrays, custom JSX factories, and better type safety features, solidifying TypeScript's position as a powerful tool for large-scale applications.
