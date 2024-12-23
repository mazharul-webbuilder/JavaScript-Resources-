// 🚀 Node.js 8.x.x (Major Release with New Features and Enhancements)

// 1) **V8 JavaScript Engine Upgrade to 6.0**
//    * Node.js 8.x.x upgraded the V8 engine to version 6.0, introducing significant performance improvements and support for the latest ECMAScript features like async functions, class properties, and more.

// Example: V8 Engine Upgrade (async functions)
async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);  // Outputs the fetched data
}

fetchData();

// 2) **LTS (Long-Term Support)**
//    * Node.js 8.x.x was the first version of Node.js to be designated as Long-Term Support (LTS), ensuring stability and security for production systems for an extended period.

// Example: LTS
// Node.js 8.x.x is in LTS mode and is suitable for enterprise use.

console.log('Node.js 8.x.x is in Long-Term Support (LTS).');

// 3) **Async Hooks API (Experimental)**
//    * Node.js 8.x.x introduced the `async_hooks` API, allowing developers to track the lifecycle of asynchronous resources in Node.js, helping with debugging and performance monitoring.

// Example: Async Hooks API
const async_hooks = require('async_hooks');

const hook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        console.log(`Async Hook: Init - ${type} with asyncId: ${asyncId}`);
    }
});

hook.enable();

setTimeout(() => {
    console.log('Timeout finished!');
}, 1000);

// 4) **Introduced the `fs.promises` API**
//    * Node.js 8.x.x introduced the `fs.promises` API, providing promise-based file system operations that allow using async/await with the `fs` module.

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

// 5) **`N-API` (Experimental)**
//    * Node.js 8.x.x introduced the N-API (Node API) to provide a stable ABI (Application Binary Interface) for building native add-ons, ensuring that native modules continue to work across Node.js versions.

// Example: `N-API`
// The N-API is used for developing native C++ add-ons, providing better ABI stability and performance.

// 6) **`Http2` Module (Stable)**
//    * The `http2` module was promoted from experimental to stable in Node.js 8.x.x, allowing developers to work with the HTTP/2 protocol for faster and more efficient communication.

// Example: `http2` Module (Stable)
const http2 = require('http2');

const server = http2.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello, HTTP/2!');
});

server.listen(3000, () => {
    console.log('HTTP/2 server listening on port 3000');
});

// 7) **`Buffer` Improvements**
//    * Node.js 8.x.x made improvements to the `Buffer` module, enhancing the performance and safety of buffer operations.

// Example: `Buffer` Improvements
const buffer = Buffer.from('Hello, Node.js 8.x.x!', 'utf8');
console.log(buffer.toString());  // Outputs: Hello, Node.js 8.x.x!

// 8) **Enhanced `console` API**
//    * The `console` API was enhanced in Node.js 8.x.x, adding new methods like `console.timeEnd()` for easier performance benchmarking and better debugging support.

// Example: Enhanced `console` API
console.time('processTimer');

setTimeout(() => {
    console.timeEnd('processTimer');  // Outputs: processTimer: <time taken>
}, 1000);

// 9) **Upgraded `npm` to Version 5**
//    * Node.js 8.x.x included npm 5 by default, which introduced better performance, new lock file format (`package-lock.json`), and several features like auto-installing peer dependencies.

// Example: `npm` 5 Features
// `npm install` now includes automatic peer dependency management.
npm install express  // Automatically installs peer dependencies

// 10) **Experimental Support for ES Modules (ESM)**
//    * Node.js 8.x.x introduced experimental support for ECMAScript modules (ESM), allowing the use of `import` and `export` syntax in Node.js applications.

// Example: ES Modules (ESM) (Experimental)
import fs from 'fs';

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Conclusion: Node.js 8.x.x brought many important features such as the stable `http2` module, async hooks API, the new `fs.promises` API, and the transition to Long-Term Support (LTS). With these improvements, it became an even more powerful tool for production-ready applications, offering enhanced performance, security, and modern JavaScript features.
