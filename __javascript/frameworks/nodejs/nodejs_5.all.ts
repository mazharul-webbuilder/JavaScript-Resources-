// 🚀 Node.js 5.x.x (Major Release with New Features and Enhancements)

// 1) **V8 JavaScript Engine Upgrade to 4.9**
//    * Node.js 5.x.x upgraded the V8 engine to version 4.9, improving performance and enabling better support for ES6 and ES7 features.

// Example: V8 Engine Upgrade (Arrow Functions and async/await)
const greet = async (name) => `Hello, ${name}!`;

greet('Node.js 5.x.x').then(console.log);  // Outputs: Hello, Node.js 5.x.x

// 2) **Experimental Support for ES6 Modules (import/export)**
//    * Node.js 5.x.x started experimental support for ES6 modules using the `import` and `export` syntax, although this required specific flags to enable the feature.

// Example: ES6 Module Support (Using `import`)
// To use ES6 modules in Node.js 5.x.x, you would use the `--experimental-modules` flag:
// node --experimental-modules app.mjs
import { greet } from './greet.mjs';
greet();  // Assuming greet.mjs exports a function `greet`

// 3) **Async Wrap API for Asynchronous Resource Tracking**
//    * Node.js 5.x.x introduced the `async_hooks` module to track asynchronous operations, allowing more efficient debugging and tracing of async resources in the system.

// Example: Async Wrap API
const async_hooks = require('async_hooks');

const hook = async_hooks.createHook({
    init: (asyncId, type, triggerAsyncId, resource) => {
        console.log(`Async hook triggered: ${type} with asyncId ${asyncId}`);
    }
});

hook.enable();

// A test asynchronous function
setTimeout(() => {}, 0);

// 4) **Improved `Buffer` Performance and API Updates**
//    * Node.js 5.x.x improved performance and provided new methods for working with buffers more efficiently, such as creating buffers directly from strings with better encoding support.

// Example: Improved `Buffer` Performance
const buffer = Buffer.from('Hello, Node.js 5.x.x!', 'utf8');
console.log(buffer.toString());  // Outputs: Hello, Node.js 5.x.x!

// 5) **`fs` Module Performance Enhancements**
//    * Node.js 5.x.x introduced performance improvements for the `fs` module, particularly for high-volume file system operations, making it faster and more efficient in handling asynchronous file operations.

// Example: `fs` Module Performance
const fs = require('fs');
fs.readFile('large-file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content loaded.');
});

// 6) **New `process.exitCode` Property**
//    * Node.js 5.x.x introduced the `process.exitCode` property, allowing developers to set the exit code of a Node.js process, providing better control over the process exit status.

// Example: `process.exitCode` Property
process.exitCode = 1;  // Set custom exit code

console.log('Process will exit with code 1');
process.exit();

// 7) **`crypto` Module Updates**
//    * Node.js 5.x.x introduced several updates to the `crypto` module, providing more secure hashing algorithms and better API methods for creating cryptographic keys and performing encryption operations.

// Example: `crypto` Module Updates
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
hash.update('Hello, Node.js!');
console.log(hash.digest('hex'));  // Outputs: SHA256 hash of the string

// 8) **Error Handling Improvements**
//    * Node.js 5.x.x improved error handling, including better stack traces and more informative error messages, making it easier to debug issues in production environments.

// Example: Error Handling Improvements
try {
    throw new Error('Something went wrong!');
} catch (err) {
    console.error(err.message);  // Outputs: Something went wrong!
    console.error(err.stack);  // Outputs: Stack trace
}

// 9) **Performance Improvements**
//    * Node.js 5.x.x introduced various performance optimizations, including improved garbage collection, better async code execution, and faster startup times for applications.

// Example: Performance Improvement (Benchmark)
const start = Date.now();

setTimeout(() => {
    console.log(`Time elapsed: ${Date.now() - start}ms`);
}, 1000);

// 10) **New `process.binding()` API for Native Addons**
//    * Node.js 5.x.x introduced a new `process.binding()` API to allow more interaction with native addons, providing access to internal Node.js bindings for better integration with C++ modules.

// Example: `process.binding()` API
const binding = process.binding('fs');
console.log(binding);  // Access Node.js internals (used internally in native modules)

// Conclusion: Node.js 5.x.x improved upon several areas, including V8 engine performance, async hooks API, ES6 module support, buffer handling, and error handling. It provided better support for async operations, improved file system handling, and performance optimizations, making it a stronger release for production applications.
