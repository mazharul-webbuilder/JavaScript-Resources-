// 🚀 Node.js 17.x.x (Major Release with New Features and Enhancements)

// 1) **OpenSSL 3.0 Support**
//    * Node.js 17.x.x introduced support for OpenSSL 3.0, which brings new cryptographic algorithms and improvements to security, including support for TLSv1.3 and better default security settings.

// Example: OpenSSL 3.0 Support
// Node.js automatically benefits from OpenSSL 3.0's improved cryptographic functions and algorithms. There’s no direct code change necessary for users to start benefiting from the updated security features in Node.js 17.x.x.

// 2) **Node.js as a Stable Platform for ECMAScript Modules (ESM)**
//    * Node.js 17.x.x made additional improvements for ECMAScript Modules (ESM), ensuring it becomes a more stable and seamless experience for developers using ESM syntax for imports and exports.

// Example: Stable ECMAScript Modules (ESM)
import { readFile } from 'fs/promises';

async function readFileAsync() {
    const data = await readFile('example.txt', 'utf8');
    console.log(data);
}

readFileAsync();  // Imports 'fs/promises' module using ESM syntax

// 3) **Experimental `--experimental-fetch` for HTTP Requests**
//    * Node.js 17.x.x introduced an experimental implementation of the `fetch()` API for making HTTP requests, enabling modern web-fetching in the Node.js environment.

// Example: `fetch()` in Node.js
// Using the experimental fetch API to make HTTP requests.
if (globalThis.fetch) {
    fetch('https://example.com')
        .then(response => response.json())
        .then(data => console.log(data));
} else {
    console.log('Fetch API is not available in this environment');
}

// 4) **New `AbortController` and `AbortSignal` Support**
//    * The `AbortController` and `AbortSignal` APIs were further improved in Node.js 17.x.x, making it easier to cancel asynchronous tasks like fetch requests or timers.

// Example: AbortController
import { AbortController } from 'abort-controller';

const controller = new AbortController();
const signal = controller.signal;

fetch('https://example.com', { signal })
    .then(response => console.log(response))
    .catch(err => console.log('Request aborted'));

setTimeout(() => controller.abort(), 1000);  // Aborts the request after 1 second

// 5) **Error Handling Improvements**
//    * Node.js 17.x.x improved error handling to be more consistent and developer-friendly, with better stack traces and clearer error messages.

// Example: Enhanced Error Handling
try {
    throw new Error('Something went wrong!');
} catch (err) {
    console.error('Caught error:', err.message);  // Outputs: Caught error: Something went wrong!
}

// 6) **V8 Engine Upgrade to v9.7**
//    * Node.js 17.x.x upgraded the V8 engine to version 9.7, which includes performance improvements, new JavaScript features, and improved support for modern ECMAScript standards.

// Example: V8 Engine Upgrade
const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n ** 2);
console.log(squared);  // Outputs: [1, 4, 9, 16]

// 7) **NPM 8.x.x (Bundled with Node.js 17.x.x)**
//    * Node.js 17.x.x comes bundled with NPM 8.x.x, introducing new features such as the `package-lock.json` v2 format, better performance, and support for automatic peer dependencies installation.

// Example: NPM 8.x.x Usage
// Running `npm install` will install dependencies and manage peer dependencies more effectively with NPM 8.x.x.

npm install <package_name> --save

// 8) **Support for the `--watch` Flag for Node.js**
//    * Node.js 17.x.x introduced support for the `--watch` flag, allowing Node.js to watch files for changes and automatically restart your application during development.

// Example: `--watch` Flag Usage
// You can now run Node.js in development mode with file watching for automatic restarts:
// node --watch app.js

// 9) **Diagnostic Report Enhancements**
//    * Node.js 17.x.x added more detailed and useful diagnostic reports, making it easier to diagnose performance issues, crashes, or unhandled exceptions in applications.

// Example: Diagnostic Report
// You can now generate diagnostic reports with additional details for easier troubleshooting:
// node --report-uncaught-exception app.js

// 10) **Timers Promises API Improvements**
//    * Node.js 17.x.x improved the Timers Promises API, making it more consistent and easier to use for developers who rely on promises for setTimeout, setInterval, and setImmediate.

// Example: Timers Promises API
import { setTimeout } from 'timers/promises';

async function delay() {
    console.log('Starting delay...');
    await setTimeout(2000);  // Waits for 2 seconds
    console.log('Delay finished!');
}

delay();  // Waits for 2 seconds before logging 'Delay finished!'

// Conclusion: Node.js 17.x.x brought significant updates including OpenSSL 3.0 support, improved ECMAScript Modules, experimental `fetch` API, enhanced error handling, and several upgrades to its built-in libraries such as timers, diagnostic reports, and more.
