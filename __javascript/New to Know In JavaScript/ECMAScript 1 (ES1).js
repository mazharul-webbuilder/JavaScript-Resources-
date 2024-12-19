// 🚀 ECMAScript 1 (Released: June 1997)

// Key Features:

// 1) Basic Syntax and Features
//    * ECMAScript 1 introduced the foundational syntax and constructs for the JavaScript language, including variables, functions, and control structures.

// Variable Declaration
var message = "Hello, ECMAScript 1!";
console.log(message);  // Outputs: Hello, ECMAScript 1!

// Function Definition
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));  // Outputs: Hello, Alice!

// Control Structures
for (var i = 0; i < 3; i++) {
    console.log("Iteration: " + i);
}  // Outputs: Iteration: 0, Iteration: 1, Iteration: 2


// 2) Basic Data Types
//    * ECMAScript 1 supported primitive data types: String, Number, Boolean, Null, and Undefined.
var stringType = "This is a string";
var numberType = 42;
var booleanType = true;
var nullType = null;
var undefinedType;

console.log(typeof stringType);  // Outputs: string
console.log(typeof numberType);  // Outputs: number
console.log(typeof booleanType); // Outputs: boolean
console.log(nullType);           // Outputs: null
console.log(typeof undefinedType); // Outputs: undefined


// 3) Objects and Arrays
//    * ECMAScript 1 introduced basic objects and arrays.
var person = {
    name: "Bob",
    age: 25
};
console.log(person.name);  // Outputs: Bob
console.log(person.age);   // Outputs: 25

var colors = ["red", "green", "blue"];
console.log(colors[0]);    // Outputs: red


// 4) String Methods
//    * Basic string methods were introduced: `length`, `charAt()`, `indexOf()`, `substring()`.
var text = "ECMAScript";
console.log(text.length);      // Outputs: 10
console.log(text.charAt(0));   // Outputs: E
console.log(text.indexOf("Script"));  // Outputs: 4
console.log(text.substring(0, 4));     // Outputs: ECMA


// 5) Global Functions
//    * Global functions like `isNaN()` and `parseInt()` were introduced.
console.log(isNaN("ABC"));   // Outputs: true
console.log(parseInt("42")); // Outputs: 42


// 6) Basic Error Handling
//    * `try`, `catch`, and `throw` statements for basic error handling.
try {
    throw "An error occurred!";
} catch (error) {
    console.log(error);  // Outputs: An error occurred!
}


// 7) Prototypes
//    * Objects in ECMAScript 1 are extensible using prototypes.
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    return this.name + " makes a noise.";
};

var dog = new Animal("Dog");
console.log(dog.speak());  // Outputs: Dog makes a noise.

// ECMAScript 1 laid the groundwork for JavaScript's evolution, providing a basic yet powerful toolkit for developers.
