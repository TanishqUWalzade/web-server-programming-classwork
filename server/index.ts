import express from 'express';

const PORT = 3000;
const SERVER = 'localhost';

const app = express();

app.get("/", (_req, res) => {
  res.send('Hello World!');
}).get("/suny", (_req, res) => {
  res.send('The best plan of my life!')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://${SERVER}:${PORT}`)
})

console.log('Listening for requests...')

/* 
Asynchronous patterns in Node.js:
    1. Node-style callbacks. Pass a function to notify, that return function is always the last parameter, the function itself can take multiple parameters, the first one is error, due to try catch block it doesnt work on asynchronous code block, first one is no means no error, function is last parameter and error is first one
    2. Pipelines.
    3. Promises.
    4. Async/await. 
*/