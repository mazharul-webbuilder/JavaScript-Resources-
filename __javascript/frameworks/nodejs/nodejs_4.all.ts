// 🚀 Node.js 4.x.x (Major Release with New Features and Enhancements)

// 1) **V8 JavaScript Engine Upgrade**
//    * Node.js 4.x.x upgraded to V8 4.5, which brought performance improvements and better JavaScript syntax support, such as ES6 features like `let`, `const`, and arrow functions.

// Example: V8 JavaScript Engine Upgrade (Arrow Functions)
const add = (a, b) => a + b;

console.log(add(2, 3));  // Outputs: 5

// 2) **Long-Term Support (LTS) Release**
//    * Node.js 4.x.x was the first version to be designated as Long-Term Support (LTS), ensuring that it would receive bug fixes and security updates for an extended period, making it more suitable for production use.

// Example: LTS Node.js (Installing Node.js LTS version)
// You can install LTS using Node Version Manager (NVM):
// nvm install --lts

// 3) **ES6 Features Support**
//    * Node.js 4.x.x added full support for several ES6 features, including `let`, `const`, arrow functions, template literals, and destructuring assignments, improving developer productivity.

// Example: ES6 Features Support (Template Literals and Destructuring)
const user = { name: 'Alice', age: 30 };

const { name, age } = user;
console.log(`${name} is ${age} years old.`);  // Outputs: Alice is 30 years old.

const greet = (name) => `Hello, ${name}!`;
console.log(greet('Bob'));  // Outputs: Hello, Bob!

// 4) **Stream API Enhancements**
//    * Node.js 4.x.x improved its stream API, including better support for stream piping, making it easier to work with streams and reduce memory overhead.

// Example: Stream API Enhancements
const fs = require('fs');
const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');

readable.pipe(writable);

// 5) **npm 3.x.x Upgrade**
//    * Node.js 4.x.x shipped with npm 3.x.x, which brought improvements like a faster and more efficient dependency resolution algorithm, and the ability to flatten the node_modules directory structure.

// Example: npm 3.x.x Upgrade
// With npm 3.x.x, Node.js project dependencies are flattened, reducing the chances of nested module conflicts and improving package management.

// 6) **Error Handling Improvements**
//    * Node.js 4.x.x introduced better error handling for asynchronous functions, including better stack traces for uncaught errors.

// Example: Error Handling Improvements
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    process.exit(1);  // Exits the process
});

// 7) **`Buffer` Improvements**
//    * The `Buffer` class in Node.js 4.x.x saw improvements, including support for creating buffers from strings in a more flexible way, as well as better performance.

// Example: Buffer Improvements
const buffer = Buffer.from('Hello, Node.js!', 'utf8');
console.log(buffer.toString());  // Outputs: Hello, Node.js!

// 8) **Promises Support in `util.promisify`**
//    * Node.js 4.x.x added `util.promisify` to convert callback-based APIs to Promise-based ones, improving integration with async/await patterns in modern JavaScript.

// Example: Promises Support (`util.promisify`)
const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

readFileAsync('example.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));

// 9) **Child Process Improvements**
//    * Node.js 4.x.x included improvements to the child process module, making it easier to spawn and manage child processes, and adding better options for handling streams and output.

// Example: Child Process Improvements
const { exec } = require('child_process');

exec('ls', (err, stdout, stderr) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Output:', stdout);
});

// 10) **V8 Debugging Enhancements**
//    * Node.js 4.x.x added improved support for V8 debugger, making it easier to debug applications running on the V8 engine, using built-in debugging tools.

// Example: V8 Debugging Enhancements
// Start Node.js with the `--inspect` flag to enable debugging:
node --inspect app.js
// Then, open `chrome://inspect` in Chrome to start debugging

// Conclusion: Node.js 4.x.x was a major release, providing enhanced support for ES6 features, improved stream handling, npm 3.x.x upgrades, better error handling, and performance improvements. It also marked the beginning of Node.js's LTS support, making it a stable and production-ready version for developers.
