// 🚀 Express.js 2.x (Major Release with New Features)

// 1) Enhanced Routing System
//    * Express 2.x introduced improvements to the routing system, making it more flexible and powerful. The framework supported dynamic route matching and parameters in the URL.

// Example: Enhanced Routing with Parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

// 2) Route Methods for HTTP Verbs
//    * Express 2.x allowed developers to define routes using HTTP verbs like GET, POST, PUT, DELETE, making it easier to define specific route actions for each HTTP method.

// Example: Defining Routes with HTTP Verbs
app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.post('/submit', (req, res) => {
    res.send('Form Submitted');
});

app.put('/update', (req, res) => {
    res.send('Data Updated');
});

app.delete('/delete', (req, res) => {
    res.send('Data Deleted');
});

// 3) Support for Multiple Middleware
//    * Express 2.x improved middleware support, allowing multiple middleware functions to be chained together for more complex processing.

// Example: Multiple Middleware Functions
app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Second middleware');
    next();
});

// 4) Support for Custom HTTP Status Codes
//    * Express 2.x allowed developers to send custom HTTP status codes with responses, making it easier to manage and handle different HTTP status responses.

// Example: Custom Status Codes
app.get('/notfound', (req, res) => {
    res.status(404).send('Page Not Found');
});

app.get('/unauthorized', (req, res) => {
    res.status(401).send('Unauthorized');
});

// 5) Improved Error Handling
//    * Express 2.x enhanced error handling by allowing custom error-handling middleware. This made it easier to manage and report errors in applications.

// Example: Improved Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// 6) Support for URL Encoded Data
//    * Express 2.x introduced middleware to parse URL-encoded data from requests, improving form submission handling and request body parsing.

// Example: Parsing URL-encoded Data
app.use(express.urlencoded({ extended: true }));
app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Form Submitted');
});

// 7) Session Management with Cookies
//    * Express 2.x added support for managing user sessions using cookies, which allowed for stateful HTTP requests to track users across multiple interactions.

// Example: Session Management with Cookies
const session = require('express-session');
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true
}));

app.get('/session', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`You visited this page ${req.session.views} times`);
    } else {
        req.session.views = 1;
        res.send('Welcome to this page for the first time!');
    }
});

// 8) Support for JSON Requests
//    * Express 2.x added built-in middleware to parse JSON data in requests, making it easier to work with JSON payloads.

// Example: Parsing JSON Data
app.use(express.json());
app.post('/jsondata', (req, res) => {
    console.log(req.body);
    res.send('JSON data received');
});

// 9) Enhanced Template Engine Support
//    * Express 2.x improved support for multiple template engines such as Jade (now Pug), allowing developers to render dynamic views more easily.

// Example: Using Jade/Pug Template Engine
app.set('view engine', 'jade');
app.get('/greeting', (req, res) => {
    res.render('greeting', { name: 'John Doe' });
});

// 10) Ability to Mount Applications
//    * Express 2.x introduced the ability to mount entire applications within other applications, making it possible to modularize Express applications.

// Example: Mounting an Application
const subApp = express();
subApp.get('/', (req, res) => {
    res.send('Subapp Home');
});
app.use('/subapp', subApp);

// Conclusion: Express 2.x added key improvements such as enhanced routing, support for multiple middleware, improved error handling, JSON and URL-encoded data parsing, session management, and template engine support, which helped developers build more complex and feature-rich web applications.
