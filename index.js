const express = require('express');
const { getStudents } = require('./students/students.service');
const app = express();

app.use((req,res, next) => {
  console.log('Middleware 1')
  // res.send('<h1>Error</h1>')
  next();
});

app.use((req,res, next) => {
  console.log('Middleware 2')
  next();
});

app.use('/students', (req, res) => {
  const params = req.params;
  getStudents({params})
  res.send('Success')
});

app.listen(3000);