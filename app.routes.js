const express = require('express');
const app = express();

app.use('/students');
app.use('/teachers');
app.use('/admin');
app.use('/results');
app.use('/courses');