// 🚀 ECMAScript 9 (Released: June 2018)

// Key Features:

// 1) Asynchronous Iteration (for-await-of)
//    * The `for-await-of` loop allows for iterating over asynchronous data sources, like async generators.
async function* generateAsyncData() {
    yield 1;
    yield 2;
    yield 3;
}

async function iterateAsync() {
    for await (let value of generateAsyncData()) {
        console.log(value);  // Outputs: 1, 2, 3
    }
}

iterateAsync();  // Call the async iteration function

// 2) Rest/Spread Properties for Objects
//    * ES9 introduced the ability to use the rest (`...`) and spread (`...`) operators with objects.

// Example: Using Spread Operator on Objects
const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, city: "New York" };
console.log(updatedPerson);  // Outputs: { name: "Alice", age: 25, city: "New York" }

// Example: Using Rest Operator to extract properties
const { name, ...rest } = person;
console.log(name);  // Outputs: Alice
console.log(rest);  // Outputs: { age: 25 }

// 3) Object.fromEntries()
//    * `Object.fromEntries()` is the inverse of `Object.entries()`. It converts an array of key-value pairs into an object.

// Example: Using Object.fromEntries()
const entries = [["name", "Bob"], ["age", 30]];
const personObject = Object.fromEntries(entries);
console.log(personObject);  // Outputs: { name: "Bob", age: 30 }

// 4) RegExp Enhancements
//    * New flags and features were added to regular expressions, such as the `s` flag (dotAll), Unicode property escapes, and named capture groups.

// Example: Using the `s` (dotAll) flag in regular expressions
const regex = /foo.bar/s;
console.log(regex.test("foo\nbar"));  // Outputs: true (dotAll flag allows `.` to match newline characters)

// Example: Using Named Capture Groups
const namedRegex = /(?<greeting>Hello), (?<name>\w+)/;
const match = namedRegex.exec("Hello, Alice");
console.log(match.groups.greeting);  // Outputs: Hello
console.log(match.groups.name);      // Outputs: Alice

// Example: Using Unicode Property Escapes in Regular Expressions
const unicodeRegex = /\p{Script=Latin}/u;  // Matches characters from the Latin script
console.log(unicodeRegex.test("A"));  // Outputs: true
console.log(unicodeRegex.test("1"));  // Outputs: false

// 5) Promise.prototype.finally()
//    * The `finally()` method allows you to run code after a promise has been settled (resolved or rejected), making it useful for cleanup tasks.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
});

myPromise
    .then((result) => {
        console.log(result);  // Outputs: Data fetched
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Cleanup code after promise is settled.");  // Outputs: Cleanup code after promise is settled.
    });

// ECMAScript 9 (ES9) focused on improving asynchronous programming with async iteration,
// and added new features to enhance object manipulation, regular expressions, and promises.
