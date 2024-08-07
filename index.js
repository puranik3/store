// Reference: https://github.com/typicode/json-server#module
require('dotenv').config();
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);

server.use(jsonServer.bodyParser);

// Add createdDate on POST requests
server.get('/health', (req, res, next) => {
    return res.status(200).json({
        message: 'OK'
    });
});

// server.use((req, res, next) => {
//     if (req.method === 'POST') {
//         var today = new Date();
//         req.body.createdDate = today.toString().substr(4, 6) + ',' + today.toString().substr(10, 5);
//     }

//     // Continue to JSON Server router
//     next();
// });

server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}. Check project README for API documentation.`);
});
