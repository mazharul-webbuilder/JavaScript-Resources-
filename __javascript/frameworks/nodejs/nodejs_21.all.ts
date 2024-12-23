// 🚀 Node.js 21.x.x (Major Release with New Features and Enhancements)

// 1) **Stable Fetch API and WebStreams**
//    * Node.js 21 introduces stable support for the Fetch API and WebStreams, enabling developers to perform HTTP requests and handle streaming data using standardized web APIs, enhancing consistency and interoperability with browser environments.

// Example: Using the Fetch API
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 2) **V8 Engine Updated to 11.8**
//    * The V8 JavaScript engine has been updated to version 11.8, bringing improved performance and new language features, including Array grouping, ArrayBuffer.prototype.transfer, and WebAssembly extended-const expressions.

// Example: Using ArrayBuffer.prototype.transfer
const buffer = new ArrayBuffer(8);
const transferredBuffer = buffer.transfer(16);
console.log(transferredBuffer.byteLength);  // Outputs: 16

// 3) **Experimental Flag for Module Defaults (`--experimental-default-type`)**
//    * Node.js 21 introduces an experimental flag (`--experimental-default-type`) that allows developers to flip the default module system used by Node.js, providing greater flexibility in handling CommonJS and ECMAScript modules.

// Example: Running Node.js with the experimental flag
// node --experimental-default-type=module app.js

// 4) **Built-in WebSocket Client**
//    * Node.js 21 includes a built-in WebSocket client, allowing developers to establish WebSocket connections without relying on external libraries, simplifying the development of real-time applications.

// Example: Using the WebSocket Client
const WebSocket = require('ws');
const ws = new WebSocket('wss://example.com/socket');

ws.on('open', () => {
    ws.send('Hello, Server!');
});

ws.on('message', (data) => {
    console.log(`Received: ${data}`);
});

// 5) **Enhanced Test Runner**
//    * The test runner module has been enhanced with new features, including the ability to run functional tests more efficiently and export results, streamlining the testing process within the Node.js environment.

// Example: Using the Test Runner
import { test } from 'node:test';

test('adds 1 + 2 to equal 3', (t) => {
    t.equal(1 + 2, 3);
});

// 6) **Improved ECMAScript Module Support**
//    * Node.js 21 offers better support for ECMAScript modules, including improved interoperability between CommonJS and ES modules, facilitating the use of modern JavaScript features and module systems.

// Example: Importing an ES Module
import { myFunction } from './myModule.js';
myFunction();

// 7) **Enhanced Diagnostic Reports**
//    * Diagnostic reports have been improved, providing more detailed information to help developers diagnose and troubleshoot issues more effectively.

// Example: Generating a Diagnostic Report
// node --report-uncaught-exception app.js

// 8) **Performance Optimizations**
//    * Various performance optimizations have been implemented, including faster file handling and web request processing, resulting in more efficient and responsive applications.

// Example: Improved File Handling
// fs.readFileSync('largeFile.txt');

// 9) **Long-Term Support (LTS)**
//    * Node.js 21 is designated as the "Current" release and will enter Long-Term Support (LTS) in October 2023, ensuring stability and security updates for an extended period.

// Example: Upgrading to LTS
// nvm install --lts

// 10) **Single Executable Applications**
//    * Node.js 21 introduces the ability to create single executable applications, simplifying deployment and distribution by bundling your application and its dependencies into a single file.

// Example: Creating a Single Executable
// pkg app.js

// Conclusion: Node.js 21 brings significant enhancements, including stable Fetch API and WebStreams, V8 engine update, experimental module defaults flag, built-in WebSocket client, enhanced test runner, improved ECMAScript module support, enhanced diagnostic reports, performance optimizations, and the ability to create single executable applications, aiming to provide a more secure, efficient, and developer-friendly environment for building modern applications.
