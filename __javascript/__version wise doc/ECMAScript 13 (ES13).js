// 🚀 ECMAScript 13 (ES13 - Expected Features)

// 1) Top-Level Await
//    * With top-level await, you can use the `await` keyword directly in the module scope without the need for an async function.

// Example: Top-Level Await
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);

// In ES13 (when it becomes available), this code will work directly at the top level of a module without needing to be inside an async function.

// 2) Class Fields and Methods (Public and Private)
//    * ES13 is expected to include support for class fields and methods with a more concise syntax, including public and private members.

// Example: Class Fields and Private Methods
class Person {
    // Public field
    name = "John Doe";

    // Private field
    #age = 30;

    // Public method
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    // Private method
    #privateMethod() {
        console.log("This is a private method.");
    }

    // Method to access the private field
    getAge() {
        return this.#age;
    }
}

const person = new Person();
person.greet();  // Outputs: Hello, my name is John Doe.
console.log(person.getAge());  // Outputs: 30
// person.#privateMethod();  // SyntaxError: Private method '#privateMethod' is not accessible outside of the class.

// 3) RegExp Match Indices
//    * ES13 adds the `indices` property to the result of a regular expression match, allowing you to easily get the start and end positions of matches in the string.

// Example: RegExp Match Indices
const regex = /(\d+)/g;
const str = "There are 123 apples and 456 oranges.";
const result = [...str.matchAll(regex)];

result.forEach(match => {
    console.log(`Found match: ${match[0]}, from index: ${match.indices[0][0]} to ${match.indices[0][1]}`);
    // Outputs:
    // Found match: 123, from index: 10 to 13
    // Found match: 456, from index: 30 to 33
});

// 4) Error Cause (Chaining Errors)
//    * ES13 may allow passing a cause when throwing an error, which makes it easier to track the origins of errors and chain them together.

// Example: Error Cause
try {
    try {
        throw new Error("Something went wrong!");
    } catch (err) {
        throw new Error("Another error occurred").cause(err);
    }
} catch (err) {
    console.log(err.message);  // Outputs: Another error occurred
    console.log(err.cause);    // Outputs: Error: Something went wrong!
}

// 5) Logical Assignment Operators (Expanded)
//    * ES13 may provide additional functionalities related to logical assignment operators, helping with cleaner code.

let a = 5;
a ||= 10;
console.log(a);  // Outputs: 5 (since a is already truthy, no assignment)

// Conclusion: ECMAScript 13 (ES13) is expected to bring several powerful features such as top-level await, enhanced class syntax,
// regex match indices, and more advanced error handling, making JavaScript more powerful and expressive.
