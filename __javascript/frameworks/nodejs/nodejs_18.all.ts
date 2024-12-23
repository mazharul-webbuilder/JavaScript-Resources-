// 🚀 Node.js 18.x.x (Major Release with New Features and Enhancements)

// 1) **Native Fetch API Support (Stable)**
//    * Node.js 18.x.x introduces the `fetch()` API as a stable, built-in feature, enabling native HTTP requests without relying on external libraries like `node-fetch`.

// Example: Native Fetch API
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));

// 2) **V8 Engine Upgrade to v10.2**
//    * Node.js 18.x.x upgraded the V8 engine to version 10.2, bringing performance improvements and new JavaScript features like better support for private class fields and logical assignment operators.

// Example: V8 Engine Upgrade
class MyClass {
    #privateField;
    constructor(value) {
        this.#privateField = value;
    }

    getPrivateField() {
        return this.#privateField;
    }
}

const myClassInstance = new MyClass('Test');
console.log(myClassInstance.getPrivateField());  // Outputs: Test

// 3) **Improved Platform Support (Apple Silicon)**
//    * Node.js 18.x.x improved support for Apple Silicon (M1 and M2 chips), providing optimized builds for macOS on ARM architecture, resulting in better performance for developers on Apple hardware.

// Example: Apple Silicon Support
// Developers using Apple Silicon chips will now experience improved performance when running Node.js applications natively on macOS.


// 4) **Global Fetch API with Streaming Support**
//    * The `fetch()` API introduced in Node.js 18.x.x also comes with streaming capabilities, enabling better handling of large HTTP responses, such as streaming video or data.

// Example: Fetch Streaming Support
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => {
        const reader = response.body.getReader();
        reader.read().then(({ done, value }) => {
            console.log(done, value);
        });
    })
    .catch(error => console.log('Error:', error));

// 5) **Stable `AbortController` and `AbortSignal`**
//    * The `AbortController` and `AbortSignal` APIs became stable in Node.js 18.x.x, allowing developers to cancel async operations like fetch requests and streams.

// Example: AbortController and AbortSignal
const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/posts', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('Request was aborted');
        }
    });

setTimeout(() => controller.abort(), 1000);  // Abort the request after 1 second

// 6) **Enhanced `URL` and `URLSearchParams`**
//    * Node.js 18.x.x introduced more powerful `URL` and `URLSearchParams` objects that provide easier handling of URL and query string parsing.

// Example: URLSearchParams Enhancements
const url = new URL('https://example.com/?name=John&age=30');
const params = new URLSearchParams(url.search);
console.log(params.get('name'));  // Outputs: John
console.log(params.get('age'));   // Outputs: 30

// 7) **Experimental Web Streams API**
//    * Node.js 18.x.x introduces an experimental implementation of the Web Streams API, making it easier to work with streams in a standardized manner across both browser and server environments.

// Example: Web Streams API
const stream = new ReadableStream({
    start(controller) {
        controller.enqueue('Hello');
        controller.enqueue('World');
        controller.close();
    }
});

const reader = stream.getReader();
reader.read().then(({ value, done }) => console.log(value, done));  // Outputs: Hello false

// 8) **Automatic Enabling of `--openssl-legacy-provider` Flag**
//    * Node.js 18.x.x automatically enables the `--openssl-legacy-provider` flag for OpenSSL compatibility, allowing applications to run without manual adjustments when using older OpenSSL providers.

// Example: OpenSSL Legacy Provider
// Node.js automatically ensures backward compatibility with older OpenSSL libraries.


// 9) **`timers` Promises API Support**
//    * The `timers/promises` module is now stable in Node.js 18.x.x, allowing developers to work with promises for asynchronous timers such as `setTimeout` and `setImmediate`.

// Example: timers/promises
import { setTimeout } from 'timers/promises';

async function delayedLog() {
    await setTimeout(1000);  // Wait for 1 second
    console.log('This message appears after 1 second!');
}

delayedLog();  // Outputs: This message appears after 1 second!

// 10) **Support for `corepack` (Experimental)**
//    * Node.js 18.x.x introduced `corepack`, an experimental package manager interface that makes it easier to manage package managers like Yarn and pnpm directly through Node.js.

// Example: Corepack
// Developers can enable the `corepack` tool to automatically use package managers without needing to install them separately.

corepack enable yarn  // Automatically uses Yarn without needing to install it globally

// Conclusion: Node.js 18.x.x brought new features like the stable Fetch API, Web Streams API, enhanced support for Apple Silicon, and better support for modern JavaScript patterns, further improving the development experience for server-side JavaScript.
