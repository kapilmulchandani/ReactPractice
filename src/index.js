// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const Todo = require('./Todo');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('cache-control', 'private, max-age=0, no-cache, no-store, must-revalidate');
    res.setHeader('expires', '0');
    res.setHeader('pragma', 'no-cache');
    next();
  });

app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'));
app.get('/addTodo', (req, res) => res.sendFile(__dirname+'/addTodo.html'));

app.get('/todos', (_, res) => {
    Todo.findAll().then((todos) => {
      res.send(todos);
    });
  });
app.post('/todos', (req, res) => {
Todo.create({ note: req.body.note })
    .then((todo) => {
    res.send(todo);
    });
});
app.delete('/todos/:id', (req, res) => {
Todo.findById(req.params.id)
    .then(todo => todo.destroy())
    .then(() => res.send());
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

function showEntireList(){
    document.getElementById('todoList').innerHTML = todos;
}
