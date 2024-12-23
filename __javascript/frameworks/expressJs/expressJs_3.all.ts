// 🚀 Express.js 3.x (Major Release with New Features and Enhancements)

// 1) Route Handlers with Regular Expressions
//    * Express 3.x introduced the ability to use regular expressions in route definitions, providing more flexibility in defining routes based on patterns.

// Example: Route Handlers with Regular Expressions
app.get(/^\/user\/(\d+)$/, (req, res) => {
    const userId = req.params[0];
    res.send(`User ID is ${userId}`);
});

// 2) JSON Response Formatting
//    * Express 3.x made it easier to send JSON responses with the `res.json()` method, automatically setting the correct content-type header.

// Example: JSON Response Formatting
app.get('/json', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// 3) `res.sendFile()` for Sending Files
//    * Express 3.x introduced the `res.sendFile()` method, allowing the server to send files to the client with ease, including HTML, images, and other assets.

// Example: Sending Files
app.get('/download', (req, res) => {
    res.sendFile(path.join(__dirname, 'file.txt'));
});

// 4) Improved `req.body` Parsing
//    * Express 3.x enhanced the parsing of `req.body` to support more formats such as JSON, URL-encoded data, and multipart forms out of the box.

// Example: Improved req.body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

// 5) `app.param()` for Route Parameter Middleware
//    * Express 3.x introduced `app.param()` to allow you to define middleware that applies to specific route parameters, making it easier to preprocess route data.

// Example: app.param() for Route Parameter Middleware
app.param('id', (req, res, next, id) => {
    req.id = parseInt(id, 10);
    next();
});

app.get('/user/:id', (req, res) => {
    res.send(`User ID is ${req.id}`);
});

// 6) Template Engine Support with Dynamic View Rendering
//    * Express 3.x improved its support for template engines, allowing dynamic view rendering with engines like Jade (Pug) and EJS.

// Example: Template Engine Support
app.set('view engine', 'jade');
app.get('/profile', (req, res) => {
    res.render('profile', { name: 'John Doe' });
});

// 7) Improved Error Handling Middleware
//    * Express 3.x enhanced the error handling middleware by allowing for more detailed error responses based on the environment (development, production).

// Example: Enhanced Error Handling Middleware
app.use((err, req, res, next) => {
    if (app.get('env') === 'development') {
        res.status(500).send(err.stack);
    } else {
        res.status(500).send('Something went wrong!');
    }
});

// 8) `app.use()` Middleware Improvements
//    * Express 3.x improved the usage of `app.use()` for mounting middleware and for defining middleware functions to be executed on requests globally or for specific routes.

// Example: app.use() Middleware Improvements
app.use(express.static('public'));  // Serve static files

app.use((req, res, next) => {
    console.log('This is middleware');
    next();
});

// 9) Enhanced Static File Serving
//    * Express 3.x made it easier to serve static files such as images, CSS, and JavaScript by providing the `express.static()` middleware for improved performance.

// Example: Enhanced Static File Serving
app.use(express.static('public'));

// 10) Support for Cookies with `req.cookies` and `res.cookie()`
//    * Express 3.x enhanced support for working with cookies, allowing you to easily set and retrieve cookies in requests and responses.

// Example: Working with Cookies
app.use(require('cookie-parser')());

app.get('/setcookie', (req, res) => {
    res.cookie('user', 'John Doe');
    res.send('Cookie set');
});

app.get('/getcookie', (req, res) => {
    res.send(`Cookie value: ${req.cookies.user}`);
});

// Conclusion: Express 3.x introduced powerful features such as route handling with regular expressions, improved error handling, and better support for cookies, static files, and body parsing. The framework continued to evolve by adding useful functionalities to make building web applications even more efficient and flexible.
