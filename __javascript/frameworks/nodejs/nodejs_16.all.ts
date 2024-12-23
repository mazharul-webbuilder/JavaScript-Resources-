// 🚀 Node.js 16.x.x (Major Release with New Features and Enhancements)

// 1) **V8 JavaScript Engine Upgrade to 9.0**
//    * Node.js 16.x.x upgraded the V8 engine to version 9.0, providing support for even newer JavaScript features and performance improvements.

// Example: V8 Engine Upgrade
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n);
console.log(squared);  // Outputs: [1, 4, 9, 16, 25]

// 2) **Apple M1 Support**
//    * Node.js 16.x.x introduced native support for Apple M1 chips, improving performance and stability on Apple Silicon devices.

// Example: Apple M1 Support
// No special code example. Node.js on Apple M1 will run as expected with better performance and native support.


// 3) **Stable ECMAScript Modules (ESM)**
//    * Node.js 16.x.x further stabilized ECMAScript modules (ESM), allowing for a seamless transition between CommonJS and ESM in production environments.

// Example: Stable ECMAScript Modules (ESM)
import { readFile } from 'fs/promises';

async function readFileAsync() {
    const data = await readFile('example.txt', 'utf8');
    console.log(data);
}

readFileAsync();  // Imports 'fs/promises' module using ESM syntax

// 4) **Node.js API Promise-Based (fs/promises)**
//    * Node.js 16.x.x introduced the `fs/promises` API as stable, allowing for better handling of file system operations using promises instead of callbacks.

// Example: fs/promises API
import fs from 'fs/promises';

async function writeToFile() {
    await fs.writeFile('example.txt', 'Hello Node.js!');
    console.log('File written successfully');
}

writeToFile();  // Uses promise-based API for file system operations

// 5) **Web Streams API (Experimental)**
//    * Node.js 16.x.x introduced the Web Streams API (still in experimental mode), allowing you to work with streams in a more standardized way across web and Node.js environments.

// Example: Web Streams API (Experimental)
const { Readable } = require('stream/web');

const stream = new Readable();
stream.push('Hello, world!');
stream.push(null);  // End of stream

stream.on('data', (chunk) => {
    console.log(chunk.toString());  // Outputs: Hello, world!
});

// 6) **Stable Timers Promises API**
//    * The Timers Promises API became stable in Node.js 16.x.x, allowing developers to use promises with `setTimeout`, `setImmediate`, and `setInterval`.

// Example: Timers Promises API
import { setTimeout } from 'timers/promises';

async function delay() {
    console.log('Starting delay...');
    await setTimeout(2000);  // Waits for 2 seconds
    console.log('Delay finished!');
}

delay();  // Waits for 2 seconds before logging 'Delay finished!'

// 7) **Corepack (Package Manager Bundled)**
//    * Node.js 16.x.x introduced Corepack, a package manager bundler that makes it easier to manage Yarn and pnpm as package managers.

// Example: Corepack (Package Manager Bundled)
// Running `corepack` command in terminal to use Yarn or pnpm directly, without needing to install them globally:
// corepack enable
// corepack prepare yarn@1.22.19 --activate

// 8) **NPM 7.x.x (Bundled with Node.js 16.x.x)**
//    * Node.js 16.x.x bundled NPM 7.x.x, which introduced several new features, such as package-lock version 2, workspaces, and support for automatic peer dependencies installation.

// Example: NPM 7.x.x
// Running `npm install` will automatically handle peer dependencies.
// npm install <package_name> --save

// 9) **AbortController (Abort Signal)**
//    * The `AbortController` API was added in Node.js 16.x.x, allowing you to abort asynchronous tasks, like HTTP requests, using an abort signal.

// Example: AbortController
import { AbortController } from 'abort-controller';

const controller = new AbortController();
const signal = controller.signal;

fetch('https://example.com', { signal })
    .then(response => console.log(response))
    .catch(err => console.log('Request aborted'));

setTimeout(() => controller.abort(), 1000);  // Aborts the request after 1 second

// 10) **Internationalization (Intl) API Improvements**
//    * Node.js 16.x.x improved support for the `Intl` API, enhancing internationalization capabilities, including support for additional locales and better formatting for currencies, dates, and numbers.

// Example: Intl API Improvements
const { DateTimeFormat } = require('intl');
const date = new Date();
const formattedDate = new DateTimeFormat('de-DE', { dateStyle: 'full' }).format(date);
console.log(formattedDate);  // Outputs: Montag, 23. Dezember 2024 (depending on locale)

// Conclusion: Node.js 16.x.x brought multiple new features, including support for Apple M1, stabilization of ECMAScript modules, promise-based `fs/promises` API, Web Streams API, Timers Promises API, and Corepack package manager, making it a more modern, efficient, and stable environment for JavaScript development.
