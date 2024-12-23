// 🚀 Node.js 22.x.x (Major Release with New Features and Enhancements)

// 1) **Experimental Web Crypto API Support**
//    * Node.js 22 introduces experimental support for the Web Crypto API, providing native cryptographic operations like hash functions, HMAC, and key generation, which were previously only available in browser environments.

// Example: Using the Web Crypto API
const { subtle } = require('crypto').webcrypto;

async function generateHash(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await subtle.digest('SHA-256', data);
    console.log(new Uint8Array(hash));
}

generateHash("Hello, Node.js!");

// 2) **Enhanced Module Resolution for ES Modules**
//    * Node.js 22 improves the module resolution for ECMAScript modules, with better handling of package.json fields and more consistent loading of ES modules in different environments.

// Example: ES Module Import
import { someFunction } from './myModule.js';
someFunction();

// 3) **Optional Chaining in Node.js API**
//    * Node.js 22 adds support for optional chaining (`?.`) in the core APIs, allowing for safer property access in objects that might be undefined or null.

// Example: Optional Chaining
const user = { profile: { name: "Alice" } };
console.log(user.profile?.name);  // Outputs: Alice
console.log(user.profile?.age);   // Outputs: undefined

// 4) **Promise.allSettled in Node.js Core**
//    * `Promise.allSettled` is now available in the core of Node.js, making it easier to handle multiple promises and obtain results whether they are fulfilled or rejected.

// Example: Using `Promise.allSettled`
const promises = [
    Promise.resolve(1),
    Promise.reject(new Error("Failed")),
    Promise.resolve(3)
];

Promise.allSettled(promises).then(results => {
    results.forEach(result => {
        console.log(result.status, result.value || result.reason);
    });
});

// 5) **Stable URL API**
//    * The URL API has become stable in Node.js 22, allowing developers to create, manipulate, and resolve URLs more easily and consistently.

// Example: Using the URL API
const url = new URL('https://example.com/path?name=Node.js');
console.log(url.hostname); // Outputs: example.com
console.log(url.searchParams.get('name')); // Outputs: Node.js

// 6) **Node.js Test Runner Improvements**
//    * The built-in Node.js Test Runner has been improved, with new features like better asynchronous test handling and enhanced output formatting, making it easier to write and execute tests within Node.js projects.

// Example: Writing Tests with Node.js Test Runner
import { test } from 'node:test';

test('simple test', (t) => {
    t.equal(1 + 2, 3);
});

// 7) **Improved Performance in HTTP/2 and HTTP/3**
//    * Node.js 22 has made significant improvements to its HTTP/2 and HTTP/3 implementations, allowing faster and more efficient handling of HTTP connections in modern web applications.

// Example: Using HTTP/2 in Node.js
const http2 = require('http2');
const server = http2.createServer((req, res) => {
    res.end('Hello from HTTP/2');
});
server.listen(3000);

// 8) **Native Support for QUIC Protocol (Experimental)**
//    * Node.js 22 introduces experimental support for the QUIC protocol, designed to improve performance and security for HTTP/3, providing developers with the ability to work with cutting-edge networking technologies.

// Example: Using QUIC (Experimental)
const quic = require('quic');

// 9) **Improved Diagnostics and Debugging Tools**
//    * New diagnostic tools have been introduced, including better support for tracing, heap dumps, and async stack traces, making it easier for developers to debug and analyze performance issues in production.

// Example: Generating a Heap Dump
require('heapdump');

// 10) **Long-Term Support (LTS)**
//    * Node.js 22 is the current active release, and it is expected to move to Long-Term Support (LTS) in the future, ensuring continued stability and security updates for users and projects using it.

// Example: Upgrade to LTS Version
// nvm install --lts

// Conclusion: Node.js 22 brings cutting-edge features like experimental Web Crypto API support, optional chaining in the core API, improved test runner capabilities, enhanced HTTP performance, and native QUIC support, alongside better diagnostics and LTS planning, positioning it as a solid foundation for modern applications with improved security, performance, and ease of use.
