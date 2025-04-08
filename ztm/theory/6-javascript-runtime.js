// JavaScript is synchronous by default, but it achieves asynchronicity with the help of the browser (or Node.js environment)

// JavaScript Runtime:
// It's a combination of the JavaScript Engine, Memory Heap, Call Stack, Web APIs, Callback Queue, and the Event Loop.
// This runtime environment enables JavaScript to be asynchronous and non-blocking, even though it's single-threaded.



// WEB API - (DOM, fetch(), setTimeout(), setInterval())
// That's comes with every browser

// Event Loop
// Every asynchronous operation is added to the event loop callback queue, and the event loop then runs the callback queue in order,
// Every time the event loop is checking is the callback queue is empty then it will check the call stack, and if the call stack is empty then it will check the event queue
// and if the event queue is empty then it will check the timeout queue and so on
// The even loop is only run when call stack is empty and entire javascript file has been read

// Example:
console.log('1')
setTimeout(function () {
    console.log('2')
}, 0)
console.log('3')

// Output: 1, 3, 2

