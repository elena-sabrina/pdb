'use strict';

const path = require('path');
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const baseRouter = require('./routes/index');
const cors = require('cors');

const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(200, 200);

const app = express();

app.use(serveFavicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(
  cors({
    origin: (process.env.ALLOWED_CORS_ORIGINS || '').split(','),
    credentials: true
  })
);
app.use(express.json());

app.use('/', baseRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ type: 'error', error: { message: error.message } });
});

module.exports = app;
