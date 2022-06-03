const {  calculateMean, calculateMedian, calculateMode } = require('./helpers');

describe("operations work correctly", function() {
  test('calculates mean for array of numbers', function() {
    let mean = calculateMean([2, 4, 6, 8]);
    expect(mean).toEqual(5)
  });

  test('calculates mean for empty array of numbers', function() {
    let mean = calculateMean([]);
    expect(mean).toEqual(0)
  });

  test('calculates median for odd set of numbers', function() {
    let median = calculateMedian([5, 6, 50, 1, -5]);
    expect(median).toEqual(5)
  });

  test('calculates median for even set of numbers', function() {
    let median = calculateMedian([2, 9, 11, 6, 7, 8]);
    expect(median).toEqual(7.5)
  });

  test('calculates mode', function() {
    let mode = calculateMode([3, 4, 1, 2, 3, 1, 3]);
    expect(mode).toEqual(3);
  });

});