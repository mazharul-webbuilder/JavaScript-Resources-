// 🚀 Node.js 12.x.x (Major Release with New Features and Enhancements)

// 1) **V8 JavaScript Engine Upgrade to 7.4**
//    * Node.js 12.x.x upgraded the V8 engine to version 7.4, improving performance and introducing new JavaScript features like optional chaining and nullish coalescing.

// Example: V8 Engine Upgrade
const obj = { a: { b: { c: 42 } } };

console.log(obj?.a?.b?.c);  // Outputs: 42 (using optional chaining)
console.log(obj?.a?.b?.d);  // Outputs: undefined (no error)

// 2) **TLS 1.3 Support**
//    * Node.js 12.x.x added support for TLS 1.3, providing improved security and faster connection establishment in TLS communications.

// Example: TLS 1.3 Support
const https = require('https');

const options = {
    hostname: 'example.com',
    port: 443,
    method: 'GET',
    protocol: 'https:',
    headers: {
        'Accept': 'application/json'
    }
};

const req = https.request(options, (res) => {
    console.log(`TLS Version: ${res.connection.getProtocol()}`);  // Outputs: TLSv1.3
    res.on('data', (data) => {
        console.log(data.toString());
    });
});

req.end();

// 3) **Diagnostic Reports (Stable)**
//    * Node.js 12.x.x stabilized the Diagnostic Reports feature, allowing developers to capture detailed reports on memory, events, and errors, improving debugging and issue tracking.

// Example: Diagnostic Reports (Stable)
const { writeFile } = require('fs');

process.report.reportDirectory = '/path/to/reports';  // Define where to store diagnostic reports

process.on('uncaughtException', (err) => {
    console.error(err);
    process.report.writeReport();
});

// 4) **`fs.promises` API (Stable)**
//    * Node.js 12.x.x further stabilized the `fs.promises` API for promise-based file system operations, making asynchronous file I/O operations more convenient.

// Example: `fs.promises` API (Stable)
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

// 5) **N-API Version 4 (Stable)**
//    * Node.js 12.x.x stabilized N-API Version 4, improving the Native API for creating native add-ons that work across different Node.js versions and improve performance.

// Example: N-API Version 4 (Stable)
// N-API is used for building native bindings but is not directly visible to users via JavaScript.

// 6) **ECMAScript Module (ESM) Support (Experimental)**
//    * Node.js 12.x.x introduced support for ECMAScript modules (ESM) in an experimental state, allowing developers to use `import` and `export` syntax in their Node.js applications.

// Example: ECMAScript Module (ESM) Support (Experimental)
// In tsconfig.json:
// {
//    "type": "module",
//    "module": "ESNext"
// }
// Create a file `math.mjs`
// export function add(a, b) {
//     return a + b;
// }
// In your main file, you can import this module:
// import { add } from './math.mjs';

// 7) **`worker_threads` API (Stable)**
//    * Node.js 12.x.x made the `worker_threads` module stable, enabling multithreading capabilities in Node.js applications, useful for handling CPU-intensive tasks.

// Example: `worker_threads` API (Stable)
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', message => console.log(message));  // Outputs: 'Hello from worker!'
    worker.postMessage('start');
} else {
    parentPort.on('message', message => {
        if (message === 'start') {
            parentPort.postMessage('Hello from worker!');
        }
    });
}

// 8) **Internationalization (ICU) by Default**
//    * Node.js 12.x.x includes full ICU (International Components for Unicode) data by default, improving internationalization and localization support for different languages and regions.

// Example: Internationalization (ICU) by Default
const { DateTimeFormat } = require('intl');

const date = new Date();
const formattedDate = new DateTimeFormat('en-US', { dateStyle: 'long' }).format(date);
console.log(formattedDate);  // Outputs: Month Day, Year (e.g., December 23, 2024)

// 9) **`console` API Improvements**
//    * Node.js 12.x.x improved the `console` API, adding new features such as `console.clear()` and `console.countReset()`.

// Example: `console` API Improvements
console.clear();  // Clears the console
console.count('Count');  // Outputs: Count: 1
console.count('Count');  // Outputs: Count: 2
console.countReset('Count');  // Resets the counter

// 10) **Deprecation of Synchronous API in `http` and `fs` Modules**
//    * Node.js 12.x.x began deprecating synchronous methods in core modules such as `http` and `fs` to encourage non-blocking, asynchronous programming patterns.

// Example: Deprecation of Synchronous API
// fs.readFileSync() is now deprecated in favor of fs.promises.readFile()
const fsSync = require('fs');
const data = fsSync.readFileSync('example.txt', 'utf8');  // Warning: Synchronous method is deprecated

// Conclusion: Node.js 12.x.x enhanced performance with the V8 engine upgrade, introduced TLS 1.3 support, improved diagnostics, and solidified features like ECMAScript modules, worker threads, and the `fs.promises` API. With the full ICU data and API improvements, Node.js 12.x.x was a major step in improving the stability and performance of Node.js for production environments.
