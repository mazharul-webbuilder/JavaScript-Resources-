// 🚀 Node.js 14.x.x (Major Release with New Features and Enhancements)

// 1) **V8 JavaScript Engine Upgrade to 8.4**
//    * Node.js 14.x.x upgraded the V8 engine to version 8.4, providing support for newer JavaScript features and improving performance.

// Example: V8 Engine Upgrade
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // Outputs: [2, 4, 6, 8] (uses V8's improved performance)

// 2) **Error Handling Improvements**
//    * Node.js 14.x.x improved error handling for unhandled rejections by deprecating the default behavior of terminating the process after an unhandled promise rejection, providing better control to developers.

// Example: Error Handling Improvements
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection:', reason);
});

// In an async function
async function faultyFunction() {
    throw new Error('Oops!');
}
faultyFunction();  // Outputs: Unhandled Rejection: Error: Oops!

// 3) **ECMAScript Modules (ESM) Stabilization**
//    * Node.js 14.x.x stabilized ECMAScript modules (ESM), allowing developers to use `import`/`export` syntax for module loading without needing experimental flags or workarounds.

// Example: ECMAScript Modules (ESM) Stabilization
// In tsconfig.json:
// {
//   "type": "module",
//   "module": "ESNext"
// }
// Create a file `math.mjs`
// export function add(a, b) { return a + b; }
// In the main file, you can import the module:
// import { add } from './math.mjs';

// 4) **Async Local Storage API (Stable)**
//    * Node.js 14.x.x made the `async_hooks` API, and more specifically the Async Local Storage (ALS) API, stable for use in applications requiring scoped state across asynchronous operations.

// Example: Async Local Storage API (Stable)
const async_hooks = require('async_hooks');
const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

async function foo() {
    const store = { userId: 123 };
    asyncLocalStorage.run(store, () => {
        console.log(asyncLocalStorage.getStore());  // Outputs: { userId: 123 }
    });
}

foo();

// 5) **Diagnostic Reports (Improved)**
//    * Node.js 14.x.x further improved diagnostic reports, allowing developers to capture more detailed data when encountering issues in production environments, making debugging easier.

// Example: Diagnostic Reports (Improved)
const fs = require('fs');

process.report.reportDirectory = '/path/to/reports';

process.on('uncaughtException', (err) => {
    console.error('Caught exception:', err);
    process.report.writeReport();  // Generates a detailed report
});

// 6) **`globalThis` Support**
//    * Node.js 14.x.x added support for `globalThis`, a standardized global object that works across all JavaScript environments, improving compatibility and consistency.

// Example: `globalThis` Support
console.log(globalThis);  // Outputs the global object (e.g., 'this' in a browser or Node.js environment)

// 7) **Stream Improvements**
//    * Node.js 14.x.x introduced performance improvements and new features for streams, making stream handling more efficient and flexible for large data processing.

// Example: Stream Improvements
const fs = require('fs');
const stream = fs.createReadStream('large-file.txt', { encoding: 'utf8' });

stream.on('data', (chunk) => {
    console.log(chunk);  // Outputs data chunks from a large file
});

// 8) **`fs.promises` API Enhancements**
//    * Node.js 14.x.x further improved the `fs.promises` API, including new methods for working with files, directories, and symbolic links in a more consistent and predictable manner.

// Example: `fs.promises` API Enhancements
const fs = require('fs').promises;

async function createDirectory() {
    await fs.mkdir('newDirectory', { recursive: true });
    console.log('Directory created!');
}

createDirectory();

// 9) **Intl (Internationalization) Improvements**
//    * Node.js 14.x.x improved support for `Intl` (Internationalization), allowing for better formatting, number, and date handling in different languages and regions.

// Example: Intl (Internationalization) Improvements
const { DateTimeFormat } = require('intl');
const date = new Date();
const formattedDate = new DateTimeFormat('fr-FR', { dateStyle: 'full' }).format(date);
console.log(formattedDate);  // Outputs: 23 décembre 2024 (depending on locale)

// 10) **Deprecations and Removals**
//    * Node.js 14.x.x continued to deprecate outdated APIs and remove deprecated features, including removing legacy `Buffer()` constructor behavior and promoting safer alternatives like `Buffer.from()`.

// Example: Deprecations and Removals
const buffer = Buffer.from('Hello, World!');
console.log(buffer);  // Outputs: <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>

// Conclusion: Node.js 14.x.x brought multiple improvements, including stabilization of ECMAScript modules, improvements in error handling, async local storage, diagnostic reports, and better internationalization support, making Node.js more robust, reliable, and efficient for production environments.
