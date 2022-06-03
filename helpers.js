/** Function to check if values are valid numbers and convert to an array*/
function validateAndCreateNumsArray(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let value = Number(nums[i]);

    if (Number.isNaN(value)) {
      return new Error(
        `The value '${nums[i]}' at index ${i} is not a valid number.`
      );
    }
    result.push(value);
  }
  return result;
}


function calculateMean(numsArr){
  if(numsArr.length === 0) return 0;
  return numsArr.reduce(function (acc, cur) {
    return acc + cur;
  }) / numsArr.length
}


function calculateMedian(numsArr){
  // if no numbers return 0
  if(numsArr.length === 0) return 0;
  
  // sort array in ascending order
  numsArr.sort((a, b) => a - b);

  let median;
  let idx = Math.floor(numsArr.length / 2);

  median = numsArr.length % 2 !== 0 ? numsArr[idx] : (numsArr[idx -1] + numsArr[idx]) / 2;

  return median;
}


/** Function to count number of occurences of each value */
function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}


function calculateMode(numsArr) {
  let counter = createFrequencyCounter(numsArr);
  let count = 0;
  let mode;

  for (let key in counter) {
    if (counter[key] > count) {
      mode = key;
      count = counter[key];
    }
  }

  return +mode;
}



module.exports = { validateAndCreateNumsArray, calculateMean, calculateMedian, calculateMode }