const express = require('express');
const { getStudents } = require('./students/students.service');
const app = express();
const appRoutes = require('./app.routes.js');

app.use((req,res, next) => {
  console.log('Middleware 1')
  next();
});

app.use((req,res, next) => {
  console.log('Middleware 2')
  next();
});

// app.use('/students', (req, res) => {
//   const params = req.params;
//   const headers = req.headers;
//   console.log({headers})
//   getStudents({params})
//   res.send('Success')
// });

app.use('/', appRoutes)
app.listen(3000);