// 🚀 Express.js 5.x (Major Release with New Features and Enhancements)

// 1) Default HTTP Method Handling
//    * Express 5.x introduced a consistent handling mechanism for HTTP methods, where route handlers are no longer ambiguous. It improves compatibility with HTTP/2 and other modern standards.

// Example: Default HTTP Method Handling
app.all('/any', (req, res) => {
    res.send('Handled any HTTP method');
});

app.get('/get', (req, res) => {
    res.send('Handled GET method');
});

// 2) Removal of `res.sendfile()` in favor of `res.sendFile()`
//    * Express 5.x removed the `res.sendfile()` method and replaced it with `res.sendFile()`, aligning the method name with its functionality and modern JavaScript conventions.

// Example: Removal of `res.sendfile()`
app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/file.txt');
});

// 3) Improved Support for `async` and `await`
//    * Express 5.x improved support for `async`/`await`, ensuring that errors in asynchronous route handlers are properly handled and passing control to the next middleware or error handler correctly.

// Example: Improved Support for `async` and `await`
app.get('/async', async (req, res, next) => {
    try {
        const data = await fetchDataFromDatabase();
        res.send(data);
    } catch (err) {
        next(err);
    }
});

// 4) Handling of Error-Handling Middleware for Async Routes
//    * Express 5.x makes it easier to handle errors in async routes by enabling middleware to catch promise rejections and propagate errors with more consistency.

// Example: Handling Error-Handling Middleware for Async Routes
app.get('/async-error', async (req, res, next) => {
    throw new Error('Something went wrong');
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);  // Error handler catches async error
});

// 5) New `express.Router()` API with Improved API Design
//    * Express 5.x introduced an enhanced `express.Router()` API, making it more intuitive and enabling better route management with simpler syntax and more flexible configuration.

// Example: New `express.Router()` API
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('User route');
});

app.use('/api', router);

// 6) Support for `app.use()` and Route Handling with Promises
//    * Express 5.x allowed `app.use()` and route handling to support Promises, which makes it easier to write asynchronous middleware and handlers in a consistent way.

// Example: Support for `app.use()` and Route Handling with Promises
app.use(async (req, res, next) => {
    try {
        await someAsyncFunction();
        next();
    } catch (err) {
        next(err);
    }
});

// 7) Deprecation of `bodyParser` Middleware as a Core Module
//    * Express 5.x deprecated the `bodyParser` middleware from the core of Express, pushing developers to install it separately as a third-party package for more flexibility.

// Example: Deprecation of `bodyParser` Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());  // Now a separate npm package

// 8) `app.get()` and `app.post()` Support for `options` Parameter
//    * Express 5.x added better support for handling `options` parameters in GET and POST requests, which facilitates configuration and customization.

// Example: `app.get()` and `app.post()` Support for `options` Parameter
app.get('/options', (req, res) => {
    const options = req.query.options;
    res.send(`Options received: ${options}`);
});

// 9) Compatibility with Newer Node.js Features
//    * Express 5.x improved compatibility with new Node.js features, including HTTP/2 support, enabling Express to take advantage of the latest advancements in the Node.js ecosystem.

// Example: Compatibility with Newer Node.js Features
const http2 = require('http2');
const server = http2.createServer(app);

server.listen(3000, () => {
    console.log('HTTP/2 server is running on port 3000');
});

// 10) Handling Routes with Wildcards
//    * Express 5.x enhanced wildcard route matching capabilities, allowing developers to easily capture dynamic route parameters with more flexibility.

// Example: Handling Routes with Wildcards
app.get('/user/*', (req, res) => {
    res.send(`Wildcard route matched: ${req.params[0]}`);
});

// Conclusion: Express 5.x continued to improve with enhanced async/await support, more consistent HTTP method handling, better error handling for async routes, improved router API, and compatibility with newer Node.js features like HTTP/2. It also moved certain modules (like `bodyParser`) to third-party packages, giving developers more control and flexibility.
