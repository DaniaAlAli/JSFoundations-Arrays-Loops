/**
 * getOdds(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only ODD numbers.
 *
 * e.g.
 * getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [1, 3, 5, 7, 9]
 * getOdds([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [11, 35, 601, 777, 999]
 */

function getOdds(numbers) {
  const newOdd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newOdd.push(numbers[i]);
    }
  }
  return newOdd;
}

/**
 * getEvens(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only EVEN numbers.
 *
 * e.g.
 * getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [2, 4, 6, 8]
 * getEvens([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [52, 14, 56, 888]
 */

function getEvens(numbers) {
  const newEven = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newEven.push(numbers[i]);
    }
  }
  return newEven;
}

/**
 * getDuplicateCount(x, numbers):
 * - receives a number `x`, and an array of numbers called `numbers`
 * - returns the number of times `x` occurs in `numbers`.
 *
 * e.g.
 * getDuplicateCount(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]) -> 4
 * getDuplicateCount(52, [11, 35, 52, 14, 56, 601, 52, 777, 888, 999, 52]) -> 3
 */
function getDuplicateCount(x, numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === x) count++;
  }
  return count;
}

/**
 * youGottaCalmDown(s):
 * - receives a string `s`
 * - returns the string `s` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */

function youGottaCalmDown(s) {
  let numberex;
  numberex = s.length;

  while (s.endsWith("!", numberex - 1)) numberex = numberex - 1;

  return s.slice(0, numberex);
}
module.exports = { getOdds, getEvens, getDuplicateCount, youGottaCalmDown };
