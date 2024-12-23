// 🚀 Node.js 0.x.x (Initial Releases with Basic Features)

// 1) **Non-blocking I/O**
//    * Node.js was built with non-blocking I/O, which allowed it to handle asynchronous operations efficiently, such as reading and writing to the filesystem, making HTTP requests, or interacting with a database without blocking the main thread.

// Example: Non-blocking I/O
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});

console.log('File reading initiated'); // This will print first due to non-blocking I/O

// 2) **Single-threaded Event Loop**
//    * Node.js operates on a single thread using an event-driven architecture. The event loop enables asynchronous execution of code without blocking the program's flow.

// Example: Event Loop
console.log('Start');
setTimeout(() => {
    console.log('This is from the event loop!');
}, 1000);
console.log('End');  // Outputs: Start, End, This is from the event loop!

// 3) **Module System (CommonJS)**
//    * Node.js 0.x.x used CommonJS modules, allowing code to be organized into separate files using `require()` and `module.exports`.

// Example: Module System
// math.js
module.exports.add = (a, b) => a + b;

// app.js
const math = require('./math');
console.log(math.add(2, 3));  // Outputs: 5

// 4) **Native HTTP Server and Client**
//    * Node.js 0.x.x provided native modules to create HTTP servers and clients, which allowed easy interaction with web APIs and building web applications.

// Example: HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node.js!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Example: HTTP Client
const http = require('http');

http.get('http://example.com', (res) => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
});

// 5) **File System API**
//    * Node.js 0.x.x included a built-in `fs` module to interact with the file system, providing functions for reading, writing, and manipulating files and directories.

// Example: File System API
const fs = require('fs');

// Write to a file
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});

// 6) **Callback Functions for Asynchronous Operations**
//    * Node.js relied heavily on callback functions for handling asynchronous operations, such as reading a file, making HTTP requests, or interacting with a database.

// Example: Callback Functions
function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 2000);
}

fetchData((message) => {
    console.log(message);  // Outputs: Data fetched
});

// 7) **Error Handling with Callbacks**
//    * In Node.js 0.x.x, error handling was done through callback functions, where the first argument of the callback function was an error object.

// Example: Error Handling with Callbacks
const fs = require('fs');

fs.readFile('nonexistent.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error occurred:', err.message);  // Outputs: Error occurred: ENOENT: no such file or directory, open 'nonexistent.txt'
    } else {
        console.log(data);
    }
});

// 8) **EventEmitter for Event-driven Programming**
//    * Node.js introduced the `EventEmitter` class to handle events and listeners. This allowed for the creation of custom event-driven behaviors in applications.

// Example: EventEmitter
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('An event has occurred!');
});

myEmitter.emit('event');  // Outputs: An event has occurred!

// 9) **JSON Support**
//    * Node.js 0.x.x provided built-in support for JSON, making it easy to parse and stringify JSON data for use in applications, including APIs and web servers.

// Example: JSON Support
const jsonString = '{"name": "Alice", "age": 30}';
const jsonObj = JSON.parse(jsonString);

console.log(jsonObj.name);  // Outputs: Alice

const newJsonString = JSON.stringify(jsonObj);
console.log(newJsonString);  // Outputs: {"name":"Alice","age":30}

// 10) **Global Object**
//    * Node.js 0.x.x introduced a set of global objects available throughout the runtime, such as `__dirname`, `__filename`, `global`, and `process`.

// Example: Global Object
console.log('Current directory:', __dirname);  // Outputs the current directory path
console.log('Current file:', __filename);      // Outputs the full path of the current file

// Conclusion: Node.js 0.x.x laid the foundation for asynchronous, non-blocking I/O, event-driven programming, and an extensive set of built-in modules for file system interaction, HTTP handling, and more. This initial release of Node.js provided developers with a powerful platform for building scalable and efficient web applications.
