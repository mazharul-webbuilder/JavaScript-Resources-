// 🚀 Node.js 6.x.x (Major Release with New Features and Enhancements)

// 1) **V8 JavaScript Engine Upgrade to 5.0**
//    * Node.js 6.x.x upgraded the V8 engine to version 5.0, which brought better performance, as well as support for newer ECMAScript features like `async/await` and improved garbage collection.

// Example: V8 Engine Upgrade (async/await)
async function greet(name) {
    return `Hello, ${name}!`;
}

greet('Node.js 6.x.x').then(console.log);  // Outputs: Hello, Node.js 6.x.x!

// 2) **Long-Term Support (LTS)**
//    * Node.js 6.x.x became the first Node.js release to enter Long-Term Support (LTS), providing a stable and supported platform for enterprise and production use.

// Example: LTS
// Node.js 6.x.x is a stable LTS release with important bug fixes and security patches.

console.log('Node.js 6.x.x is in LTS mode.');

// 3) **Native Support for `async/await` Syntax**
//    * Node.js 6.x.x fully supported `async/await` syntax, allowing for better asynchronous programming without the use of callbacks or promise chains.

// Example: Native `async/await` Support
async function fetchData() {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await result.json();
    console.log(data);  // Outputs the fetched data
}

fetchData();

// 4) **`Buffer` Improvements**
//    * Node.js 6.x.x introduced several improvements to the `Buffer` API, including changes to make buffer handling safer and more efficient, such as creating buffers with string encoding directly.

// Example: `Buffer` Improvements
const buffer = Buffer.from('Hello, Node.js 6.x.x!', 'utf8');
console.log(buffer.toString());  // Outputs: Hello, Node.js 6.x.x!

// 5) **`npm` 3.x.x Integrated**
//    * Node.js 6.x.x included the updated version of `npm` (3.x.x), which brought improvements to package management, like faster installs, better deduplication, and enhanced dependency handling.

// Example: `npm` 3.x.x Features
// To use the new `npm` features, simply run `npm install` as usual after upgrading Node.js.

npm install express  // Faster package installation with npm 3.x.x

// 6) **New `fs` Promises API**
//    * Node.js 6.x.x introduced experimental support for the `fs.promises` API, allowing developers to use `async/await` syntax with the file system module for better readability.

// Example: `fs.promises` API
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log(data);  // Outputs the content of the file
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFile();

// 7) **`crypto` Module Updates**
//    * Node.js 6.x.x introduced new methods and improvements in the `crypto` module, making encryption and decryption tasks easier and more secure, including support for `hmac` and `sha` algorithms.

// Example: `crypto` Module Updates
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
hash.update('Hello, Node.js 6.x.x!');
console.log(hash.digest('hex'));  // Outputs the SHA-256 hash of the string

// 8) **`http2` Experimental Support**
//    * Node.js 6.x.x introduced experimental support for the `http2` module, enabling HTTP/2 features like multiplexing, header compression, and more efficient data transfer.

// Example: `http2` Module
const http2 = require('http2');

const server = http2.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello, HTTP/2!');
});

server.listen(3000, () => {
    console.log('HTTP/2 server listening on port 3000');
});

// 9) **Enhanced Error Handling in `Promise` API**
//    * Node.js 6.x.x improved error handling in promises, offering better stack traces and more informative error messages for developers working with promises.

// Example: Enhanced Promise Error Handling
new Promise((resolve, reject) => {
    reject(new Error('Something went wrong!'));
})
    .catch((err) => {
        console.error(err.message);  // Outputs: Something went wrong!
        console.error(err.stack);    // Outputs stack trace for debugging
    });

// 10) **Other Performance Enhancements**
//    * Node.js 6.x.x came with multiple optimizations in core libraries and performance improvements, including better handling of large workloads, improved garbage collection, and faster asynchronous operations.

// Example: Performance Benchmark
const start = Date.now();

setTimeout(() => {
    console.log(`Time elapsed: ${Date.now() - start}ms`);
}, 1000);

// Conclusion: Node.js 6.x.x introduced several important features such as full support for `async/await`, native support for HTTP/2, improvements in `Buffer` and `crypto` modules, and the introduction of long-term support (LTS), making it a solid choice for production-ready applications.
