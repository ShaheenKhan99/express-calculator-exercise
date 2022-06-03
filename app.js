const express = require('express');
const ExpressError = require('./expressError');
const { validateAndCreateNumsArray, calculateMean, calculateMedian, calculateMode } = require('./helpers');


const app = express();

app.use(express.json());


/** Calculate and display mean on page  */
app.get('/mean', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('Please enter a list of numbers.', 400)
  }
  let splitNums = req.query.nums.split(',');
  let validNums = validateAndCreateNumsArray(splitNums);
  
  if (validNums instanceof Error) {
    throw new ExpressError(validNums.message);
  }
  
  let result = {
    operation: "mean",
    value: calculateMean(validNums)
  }

  return res.json(result);
});


/** Calculate and display median on page  */
app.get('/median', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('Please enter a list of numbers.', 400)
  }
  let splitNums = req.query.nums.split(',');
  let validNums = validateAndCreateNumsArray(splitNums);
  
  if (validNums instanceof Error) {
    throw new ExpressError(validNums.message);
  }
  
  let result = {
    operation: "median",
    value: calculateMedian(validNums)
  }

  return res.json(result);
});

/** Calculate and display mode on page  */
app.get('/mode', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('Please enter a list of numbers.', 400)
  }
  let splitNums = req.query.nums.split(',');
  let validNums = validateAndCreateNumsArray(splitNums);
  
  if (validNums instanceof Error) {
    throw new ExpressError(validNums.message);
  }
  
  let result = {
    operation: "mode",
    value: calculateMode(validNums)
  }

  return res.json(result);
});


/** Calculate and display all three operations on page  */
app.get('/all', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('Please enter a list of numbers.', 400)
  }
  let splitNums = req.query.nums.split(',');
  let validNums = validateAndCreateNumsArray(splitNums);
  
  if (validNums instanceof Error) {
    throw new ExpressError(validNums.message);
  }
  
  let result = {
    operation: "all",
    mean: calculateMean(validNums),
    median: calculateMedian(validNums),
    mode: calculateMode(validNums)
  }

  return res.json(result);
});


/** Page not found error handler */
app.use(function (req, res, next) {
  const err = new ExpressError("Page Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});


/** General error handler */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});