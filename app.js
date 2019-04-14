const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');

const db = require('./helper/db')();
const indexRouter = require('./routes/index');
const studentsRouter = require('./routes/students');
const projectsRouter = require('./routes/projects');
const reportsRouter = require('./routes/reports');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/students', studentsRouter);
app.use('/projects', projectsRouter); 
app.use('/reports', reportsRouter);

module.exports =  app;