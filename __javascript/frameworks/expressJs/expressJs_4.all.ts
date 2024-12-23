// 🚀 Express.js 4.x (Major Release with New Features and Enhancements)

// 1) Router-Based Architecture
//    * Express 4.x introduced the `Router` object, allowing better modularization of the application by separating different routes into their own modules.

// Example: Router-Based Architecture
const express = require('express');
const app = express();
const router = express.Router();

router.get('/home', (req, res) => {
    res.send('Welcome to the homepage');
});

app.use('/api', router);  // Mount the router

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// 2) Removal of `connect` Middleware
//    * Express 4.x removed the default `connect` middleware stack and separated it into individual modules, giving developers more flexibility to choose only the middleware they need.

// Example: Removal of connect Middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());

// 3) `app.listen()` Returns the HTTP Server
//    * Express 4.x introduced that `app.listen()` now returns the HTTP server instance, which makes it possible to have more control over the server, like handling upgrades or adding listeners.

// Example: `app.listen()` Returns the HTTP Server
const server = app.listen(3000, () => {
    console.log('Server is running');
});

server.on('upgrade', (req, socket, head) => {
    // Handle WebSocket upgrades
    console.log('WebSocket upgrade request');
});

// 4) `next()` in Routes for Error Handling
//    * Express 4.x added better support for `next()` in routes for handling errors and passing control to the next middleware or error handler.

// Example: `next()` in Routes for Error Handling
app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong');
    next(err);  // Pass error to error handling middleware
});

app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong!');
});

// 5) `app.param()` for Route Parameters
//    * Express 4.x continued support for `app.param()`, allowing parameter-specific middleware for route parameter validation and transformation.

// Example: `app.param()` for Route Parameters
app.param('userId', (req, res, next, userId) => {
    req.userId = userId;
    next();
});

app.get('/user/:userId', (req, res) => {
    res.send(`User ID: ${req.userId}`);
});

// 6) `app.set()` and `app.get()` for Configuration
//    * Express 4.x enhanced `app.set()` and `app.get()` methods for managing application configuration, making it easier to define environment-specific settings.

// Example: `app.set()` and `app.get()` for Configuration
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');  // Render the 'index' view
});

// 7) `res.send()` Improvements
//    * Express 4.x improved `res.send()` to handle more response types, including strings, JSON objects, buffers, and HTML content, automatically setting the correct content-type header.

// Example: `res.send()` Improvements
app.get('/json', (req, res) => {
    res.send({ message: 'Hello, JSON!' });
});

app.get('/html', (req, res) => {
    res.send('<h1>Hello, HTML!</h1>');
});

// 8) Support for Promises and Async/Await
//    * Express 4.x allowed developers to return Promises or use async/await in routes, providing a more modern way to handle asynchronous code in Express.

// Example: Support for Promises and Async/Await
app.get('/async', async (req, res) => {
    const data = await fetchDataFromDatabase();
    res.json(data);
});

// 9) `res.status()` for Setting Response Status Codes
//    * Express 4.x improved the ability to set HTTP status codes with `res.status()`, making it easier to return specific status codes for various types of responses.

// Example: `res.status()` for Setting Response Status Codes
app.get('/notfound', (req, res) => {
    res.status(404).send('Not Found');
});

// 10) JSONP Support for Cross-Domain Requests
//    * Express 4.x added native support for JSONP, allowing cross-domain requests to be made for JSON data in a more secure and controlled manner.

// Example: JSONP Support for Cross-Domain Requests
app.get('/jsonp', (req, res) => {
    res.jsonp({ message: 'Hello from JSONP' });
});

// Conclusion: Express 4.x brought significant improvements, such as the introduction of router-based architecture, better error handling with `next()`, enhanced support for Promises and async/await, and improvements in routing, configuration, and JSONP support. The framework became more modular and flexible, providing developers with greater control and customization for building web applications.
