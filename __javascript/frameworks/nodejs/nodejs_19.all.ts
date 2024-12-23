// 🚀 Node.js 19.x.x (Major Release with New Features and Enhancements)

// 1) **Experimental Web Crypto API**
//    * Node.js 19.x.x introduces an experimental implementation of the Web Crypto API, which allows developers to perform cryptographic operations using the web standard API, such as generating hashes and encrypting data.

// Example: Web Crypto API
const encoder = new TextEncoder();
const data = encoder.encode('Hello, Node.js!');

crypto.subtle.digest('SHA-256', data)
    .then(hash => {
        const hashArray = Array.from(new Uint8Array(hash));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        console.log(hashHex);  // Outputs the SHA-256 hash of the string
    });

// 2) **Stable `experimental Fetch API`**
//    * The Fetch API introduced in Node.js 18.x.x became stable in Node.js 19.x.x, providing developers with a fully supported way to make HTTP requests using the same `fetch()` API available in browsers.

// Example: Stable Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));

// 3) **V8 Engine Upgrade to v10.5**
//    * Node.js 19.x.x upgraded the V8 engine to version 10.5, bringing improvements in performance, memory management, and support for new ECMAScript features like private methods in classes and logical assignment operators.

// Example: V8 Engine Upgrade
class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.#name}`);
    }
}

const person = new Person('Alice');
person.greet();  // Outputs: Hello, my name is Alice

// 4) **New `node:test` Module for Unit Testing**
//    * Node.js 19.x.x introduces the `node:test` module as a stable solution for running unit tests in Node.js, allowing for easier testing without external libraries like Mocha or Jest.

// Example: `node:test` Module
import { test } from 'node:test';

test('adds 1 + 2 to equal 3', (t) => {
    t.equal(1 + 2, 3);
});

// 5) **V8 `Intl.DisplayNames` Support for Internationalization**
//    * Node.js 19.x.x added support for the `Intl.DisplayNames` API, which makes it easier to display human-readable names for regions, languages, or scripts in internationalization scenarios.

// Example: `Intl.DisplayNames` API
const displayNames = new Intl.DisplayNames(['en'], { type: 'language' });
console.log(displayNames.of('en'));  // Outputs: English

// 6) **Updated `node:fs` Module with More Modern APIs**
//    * Node.js 19.x.x updated the `node:fs` module, adding support for more modern APIs like `fs.promises` to work with files asynchronously using promises.

// Example: `fs.promises` API
import { promises as fs } from 'fs';

async function readFile() {
    const data = await fs.readFile('example.txt', 'utf-8');
    console.log(data);
}

readFile();  // Outputs content of 'example.txt'

// 7) **Stream Enhancements**
//    * Node.js 19.x.x improved the stream API with better performance and more features, including improved support for working with Readable and Writable streams.

// Example: Stream Enhancements
const { Readable } = require('stream');

const readableStream = new Readable({
    read() {
        this.push('Hello, World!');
        this.push(null);  // End the stream
    }
});

readableStream.on('data', (chunk) => {
    console.log(chunk.toString());  // Outputs: Hello, World!
});

// 8) **Built-in JSON.parse() Revamp**
//    * Node.js 19.x.x updated the built-in `JSON.parse()` method for better performance and support for large JSON objects, improving efficiency when parsing large data sets.

// Example: JSON.parse() Revamp
const largeJsonString = '{"name": "Node.js", "version": "19.0"}';
const parsedData = JSON.parse(largeJsonString);
console.log(parsedData);  // Outputs: { name: 'Node.js', version: '19.0' }

// 9) **Enhanced Diagnostic Reporting**
//    * Node.js 19.x.x improved diagnostic reporting, allowing for easier collection of diagnostic data like heap dumps, stack traces, and performance monitoring directly from Node.js apps.

// Example: Enhanced Diagnostic Reporting
// Node.js 19.x.x allows more detailed logs using flags like `--diagnostic-report` to capture diagnostics when necessary.

// 10) **Performance Improvements with libuv and Worker Threads**
//    * Node.js 19.x.x brings performance improvements in `libuv` and `Worker Threads`, optimizing concurrent processing and I/O-bound tasks. These changes provide better scalability and speed for large-scale applications.

// Example: Worker Threads Performance
import { Worker } from 'worker_threads';

const worker = new Worker('./worker.js');
worker.on('message', (msg) => {
    console.log(msg);  // Outputs message from worker thread
});

// Conclusion: Node.js 19.x.x brought several new features like the stable Fetch API, improvements in the V8 engine, enhanced stream support, better diagnostics, and support for modern file handling and unit testing, further improving Node.js as a platform for modern server-side JavaScript development.
