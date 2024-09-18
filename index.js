const connect = require('connect');
const app = connect();

function logger(req,res, next){
    console.log("This is my logger", req.method, req.url);
    next();
}

function helloWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World');
};

function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end("Goodbye World");
}

app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',goodbyeWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000/');
