// 🚀 Node.js 23.x.x (Major Release with New Features and Enhancements)

// 1) **Native Fetch API**
//    * Node.js 23 introduces native support for the Fetch API, enabling developers to make network requests in a more standardized way, aligning with the browser's fetch functionality.

// Example: Using the Fetch API
import fetch from 'node-fetch';  // Or `fetch` can be used directly if globally available in Node.js 23.

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}

fetchData();

// 2) **ES Modules (ESM) as Default**
//    * In Node.js 23, ECMAScript Modules (ESM) are now the default, streamlining the usage of import/export syntax and ensuring better compatibility with modern JavaScript projects.

// Example: Using ESM in Node.js
import fs from 'fs/promises';

async function readFile() {
    const data = await fs.readFile('example.txt', 'utf-8');
    console.log(data);
}

readFile();

// 3) **Top-Level Await in ES Modules**
//    * Node.js 23 adds support for top-level await in ECMAScript modules, which allows the use of the `await` keyword directly in the module scope without wrapping it in an `async` function.

// Example: Top-Level Await
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);

// 4) **Web Streams API (Experimental)**
//    * The Web Streams API, an essential part of modern web standards for streaming data, is now available as an experimental feature in Node.js 23, enabling better handling of streams and improving interoperability with browser APIs.

// Example: Using Web Streams API
const { Readable } = require('stream/web');
const readableStream = Readable.from(['Hello', 'World']);
readableStream.pipe(process.stdout);  // Outputs: HelloWorld

// 5) **AbortController and AbortSignal**
//    * Node.js 23 introduces full support for `AbortController` and `AbortSignal`, allowing developers to cancel fetch requests and other asynchronous operations, improving control over long-running tasks.

// Example: Using AbortController
const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 500); // Aborts after 500ms

fetch('https://api.example.com/data', { signal })
    .then(response => response.json())
    .catch(error => console.log('Request aborted:', error));

// 6) **Worker Threads Improvements**
//    * Node.js 23 brings improvements to worker threads, such as better support for structured cloning, sharing of memory buffers, and enhanced debugging capabilities.

// Example: Using Worker Threads
import { Worker } from 'worker_threads';

const worker = new Worker('./worker.js');

worker.on('message', (message) => {
    console.log(`Received from worker: ${message}`);
});

worker.postMessage('Hello Worker!');

// 7) **QUIC Support (Stable)**
//    * Node.js 23 stabilizes QUIC protocol support, a next-gen transport protocol that can improve performance and security, especially for HTTP/3 support.

// Example: Using QUIC (Stable)
const { QUIC } = require('quic');

// Start a QUIC server
const server = QUIC.createServer((request, response) => {
    response.end('Hello QUIC!');
});

server.listen(4433, () => {
    console.log('QUIC server listening on port 4433');
});

// 8) **Improved Diagnostics with Async Hooks and Trace Events**
//    * Node.js 23 enhances diagnostics support with better integration of async hooks and trace events, allowing for better performance monitoring, debugging, and tracing of asynchronous code execution.

// Example: Using Async Hooks
const async_hooks = require('async_hooks');

const hook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        console.log(`Async resource created: ${type}`);
    },
});

hook.enable();

// 9) **Diagnostic Reports via CLI**
//    * Node.js 23 improves the diagnostic reports feature with better integration into the CLI, enabling developers to quickly generate diagnostic reports of Node.js processes for easier debugging and performance analysis.

// Example: Generate a Diagnostic Report
// Run this command in the terminal:
// node --report my-app.js

// 10) **V8 Engine Updates (Enhanced Performance)**
//    * Node.js 23 comes with an updated V8 engine, bringing various performance improvements such as faster execution times, better memory management, and enhanced garbage collection.

// Example: V8 Engine Performance Improvements
// Developers will see improved performance in real-world applications without any changes to their code, as V8 optimizations will be automatically applied.

// Conclusion: Node.js 23 introduces powerful new features such as native support for the Fetch API, top-level await, and improved Web Streams API. With enhanced diagnostics, better worker thread support, stable QUIC, and improved performance via the V8 engine, Node.js 23 solidifies its position as a robust platform for building scalable and modern applications.
