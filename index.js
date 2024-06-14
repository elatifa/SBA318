const express = require('express');
const bodyParser = require('body-parser');
const { getUsers } = require('./public/users');
const { getPosts } = require('./public/posts');
const { getComments } = require('./public/comments');

const app = express();

const port = 3000;

app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
  res.send('Work in progress!');
});

app.get('/users', (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredUsers = getUsers().filter((user) => user.name === name);
    res.json(filteredUsers);
  } else {
    res.json(getUsers());
  }
});

app.get('/posts', (req, res) => {
  res.json(getPosts());
});

app.get('/comments', (req, res) => {
  res.json(getComments());
});

app.get('/', (req, res) => {
  res.render('index', { users: getUsers() });
});
app.set('view engine', 'ejs');

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin' && password === 'password') {
    req.user = { name: 'Admin' };
    res.send(`Welcome, ${req.user.name}!`);
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.post('/categories', (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        res.status(400).json({ error: 'Name is required' });
        return;
      }
      const newCategory = { id: categories.length + 1, name };
      categories.push(newCategory);
      res.status(201).json(newCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });