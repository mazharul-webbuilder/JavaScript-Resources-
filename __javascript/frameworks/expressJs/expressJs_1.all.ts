// 🚀 Express.js 1.x (First Major Release)

// 1) Basic Web Framework
//    * Express 1.x was the first version of Express, a minimal web framework for Node.js that provides a simple API to create web servers, handling HTTP requests and responses.

// Example: Creating a Simple Web Server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// 2) Basic Routing
//    * Express 1.x introduced routing, allowing developers to define route handlers for different HTTP methods (GET, POST, etc.).

// Example: Handling Different HTTP Methods
app.post('/submit', (req, res) => {
    res.send('Form Submitted');
});

app.put('/update', (req, res) => {
    res.send('Data Updated');
});

// 3) Middleware Support
//    * Express 1.x introduced the concept of middleware, which are functions that execute during the lifecycle of an HTTP request, allowing pre-processing and customization of requests.

// Example: Basic Middleware
app.use((req, res, next) => {
    console.log('Request received');
    next();  // Proceed to the next middleware or route handler
});

// 4) Template Engine Integration
//    * Express 1.x integrated with template engines like EJS, allowing dynamic rendering of HTML templates.

// Example: Using EJS for Templating
app.set('view engine', 'ejs');
app.get('/profile', (req, res) => {
    res.render('profile', { name: 'John Doe' });
});

// 5) Static File Serving
//    * Express 1.x supported serving static files (e.g., images, CSS, JavaScript) from a designated folder, enabling easy integration with front-end assets.

// Example: Serving Static Files
app.use(express.static('public'));

// 6) Simple Error Handling
//    * Express 1.x provided basic error handling, allowing developers to catch and handle errors in the application.

// Example: Basic Error Handling
app.get('/error', (req, res) => {
    throw new Error('Something went wrong');
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
});

// Conclusion: Express.js 1.x introduced basic functionality such as routing, middleware, static file serving, template engine integration, and simple error handling, forming the foundation for future versions of Express.js.
