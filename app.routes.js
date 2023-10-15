const express = require('express');
const app = express();
const router = express.Router();
const studentRoutes = require('./students/students.routes');

router.use('/students', studentRoutes)
router.use('/teachers', studentRoutes)


module.exports = router;
