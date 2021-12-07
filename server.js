const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
// bring in mongodb
const connectDB = require('./config/db');
const apes = require('./routes/apes');
const financialprepSentiment = require('./routes/sentiment/financialprepSentiment');
const portfolio = require('./routes/fundamental/portfolio');
const income = require('./routes/fundamental/income');

// Load env vars
dotenv.config({ path: './config/config.env' });
connectDB();
const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app.use(logger)

// Mount router Step 2
app.use('/api/v1/apes', apes);
app.use('/api/v1/fpsentiment', financialprepSentiment);
app.use('/api/v1/portfolio', portfolio);
app.use('/api/v1/income', income);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
