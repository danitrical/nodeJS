const express = require('express');
const app = express();
const router = express.Router();
const studentService = require('./students.service');

const stuSer = new studentService();


router.get('', (req, res, next) => {
  res.send('JSON.stringify(req)')
});

router.get('/:id', (req, res, next) => {
  const error = {
    message: 'Not A Valid Id'
  }
  if (isNaN(req.params?.id)) res.status(400).json(error)
  stuSer.getStudents(req.params?.id)
  res.send(req.params?.id)
});

module.exports = router;
