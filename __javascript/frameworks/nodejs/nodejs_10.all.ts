// 🚀 Node.js 10.x.x (Major Release with New Features and Enhancements)

// 1) **V8 JavaScript Engine Upgrade to 6.8**
//    * Node.js 10.x.x upgraded the V8 engine to version 6.8, bringing new features and performance improvements to the JavaScript runtime.

// Example: V8 Engine Upgrade (Performance Improvements)
async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);  // Outputs the fetched data
}

fetchData();

// 2) **LTS (Long-Term Support)**
//    * Node.js 10.x.x was designated as Long-Term Support (LTS), ensuring continued stability and security for production systems.

// Example: LTS
// Node.js 10.x.x is an LTS version suitable for enterprise production use.
console.log('Node.js 10.x.x is in Long-Term Support (LTS).');

// 3) **`fs.promises` API**
//    * Node.js 10.x.x fully stabilized the `fs.promises` API for promise-based file system operations, which had been introduced in Node.js 8.x.x.

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

// 4) **Worker Threads (Experimental)**
//    * Node.js 10.x.x introduced the `worker_threads` module as an experimental feature to enable multi-threading in Node.js applications for better CPU-bound task handling.

// Example: Worker Threads (Experimental)
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

// 5) **`http2` API (Improved)**
//    * Node.js 10.x.x enhanced the `http2` API with improvements to support more features of HTTP/2, which helps with better performance in networking tasks.

// Example: `http2` API (Improved)
const http2 = require('http2');

const server = http2.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello, HTTP/2!');
});

server.listen(3000, () => {
    console.log('HTTP/2 server listening on port 3000');
});

// 6) **`dns` Promises API**
//    * Node.js 10.x.x added a `dns.promises` API to allow asynchronous DNS lookups using promises and async/await.

// Example: `dns.promises` API
const dns = require('dns').promises;

async function getIpAddress() {
    try {
        const address = await dns.lookup('example.com');
        console.log(address);  // Outputs: { address: '93.184.216.34', family: 4 }
    } catch (error) {
        console.error('DNS lookup failed:', error);
    }
}

getIpAddress();

// 7) **Full-Width Unicode Support (UTF-8)**
//    * Node.js 10.x.x introduced full-width Unicode support for UTF-8 encoded data, making it easier to handle diverse character sets.

// Example: Full-Width Unicode Support
const greeting = "こんにちは、Node.js 10.x.x！";  // Japanese greeting
console.log(greeting);  // Outputs: こんにちは、Node.js 10.x.x！

// 8) **Improved Diagnostic Reporting (Experimental)**
//    * Node.js 10.x.x introduced a diagnostic reporting feature, allowing developers to gather diagnostics about Node.js processes for troubleshooting purposes.

// Example: Diagnostic Reporting (Experimental)
const { writeFile } = require('fs');

const reportFile = '/path/to/report.json';

writeFile(reportFile, 'diagnostic data here...', (err) => {
    if (err) throw err;
    console.log('Diagnostic report written.');
});

// 9) **TLS and OpenSSL 1.1.0 Support**
//    * Node.js 10.x.x upgraded its TLS and OpenSSL support, ensuring better security and performance for HTTPS connections.

// Example: TLS and OpenSSL Support
const https = require('https');

const options = {
    hostname: 'example.com',
    port: 443,
    path: '/',
    method: 'GET'
};

const req = https.request(options, res => {
    res.on('data', chunk => {
        console.log(chunk.toString());  // Outputs the response body from example.com
    });
});

req.end();

// 10) **V8 Snapshot Support for Better Performance**
//    * Node.js 10.x.x introduced V8 snapshot support, which significantly improves startup time and reduces memory usage for Node.js applications.

// Example: V8 Snapshot
// V8 snapshot is internally used to optimize the startup of Node.js and is not directly visible to developers.

// Conclusion: Node.js 10.x.x brought significant features such as the full stabilization of the `fs.promises` API, improved `http2` support, worker threads (experimental), better diagnostic reporting, and TLS/OpenSSL support. With its LTS status, it was a major step forward for Node.js in terms of performance, stability, and security.
