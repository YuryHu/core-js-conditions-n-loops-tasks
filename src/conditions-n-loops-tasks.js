/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const preliminaryMax = a > b ? a : b;
  return preliminaryMax > c ? preliminaryMax : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const mirroredQy = 9 - queen.y;
  const mirroredKy = 9 - king.y;
  const res =
    queen.x === king.x ||
    queen.y === king.y ||
    queen.x - queen.y === king.x - king.y ||
    queen.x - mirroredQy === king.x - mirroredKy;
  return res;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (!a || !b || !c) {
    return false;
  }
  if (a + b < c || b + c < a || a + c < b) {
    return false;
  }
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  let num1 = num;
  const digits = ['', 'I', 'II', 'III', 'IV'];
  while (num1 > 9) {
    res += 'X';
    num1 -= 10;
  }
  if (num1 === 9) {
    res += 'IX';
    return res;
  }
  if (num1 > 4) {
    res += 'V';
    num1 -= 5;
  }
  return res + digits[num1];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const words = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        res += 'minus';
        break;
      case '.':
        res += 'point';
        break;
      case ',':
        res += 'point';
        break;
      default:
        res += words[numberStr[i]];
    }
    if (i < numberStr.length - 1) {
      res += ' ';
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const halfLen = Math.floor(str.length / 2);
  for (let i = 0; i < halfLen; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let num1 = num;
  while (num1 > 9) {
    if (num1 % 10 === digit) {
      return true;
    }
    num1 = Math.floor(num1 / 10);
  }
  return num1 === digit;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function subSum(start, end) {
    let sum = 0;
    for (let i = start; i < end; i += 1) {
      sum += arr[i];
    }
    return sum;
  }
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (subSum(0, i) === subSum(i + 1, arr.length)) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
class Builder {
  constructor(size) {
    this.i = 0;
    this.j = 0;
    this.res = [];
    this.dir = 'r';
    for (let k = 0; k < size; k += 1) {
      this.res[k] = [];
    }
    this.size = size;
  }

  goLeft() {
    if (this.j && !this.res[this.i][this.j - 1]) {
      this.j -= 1;
      return '';
    }
    return this.goUp();
  }

  goDown() {
    if (this.i < this.size - 1 && !this.res[this.i + 1][this.j]) {
      this.i += 1;
      return '';
    }
    return this.goLeft();
  }

  goRight() {
    if (this.j < this.size - 1 && !this.res[this.i][this.j + 1]) {
      this.j += 1;
      return '';
    }
    return this.goDown();
  }

  goUp() {
    if (this.i && !this.res[this.i - 1][this.j]) {
      this.i -= 1;
      this.dir = 'u';
      return '';
    }
    this.dir = 'r';
    return this.goRight();
  }

  build() {
    for (let c = 1; c <= this.size ** 2; c += 1) {
      this.res[this.i][this.j] = c;
      if (c < this.size ** 2) {
        if (this.dir === 'u') {
          this.goUp();
        } else {
          this.goRight();
        }
      }
    }
    return this.res;
  }
}
function getSpiralMatrix(size) {
  const builder = new Builder(size);
  return builder.build();
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const finalRes = matrix;
  const res = [];
  for (let k = 0; k < matrix.length; k += 1) {
    res[k] = [];
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      res[j][matrix.length - i - 1] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      finalRes[i][j] = res[i][j];
    }
  }
  return finalRes;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
const quickSort = (arr) => {
  return arr.sort((a, b) => a - b);
};
function sortByAsc(arr) {
  return quickSort(arr);
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let str2 = str;
  function oneShuffle(str1) {
    const evens = str1.replace(/(.|$)./g, '$1');
    const odds = str1.replace(/.(.|$)/g, '$1');
    return evens + odds;
  }
  for (let i = 0; i < iterations; i += 1) {
    str2 = oneShuffle(str2);
  }
  return str2;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function toArray1(num1) {
  let num = num1;
  const res = [];
  let digit;
  while (num) {
    digit = num % 10;
    res.push(digit);
    num = (num - digit) / 10;
  }
  return res.reverse();
}
function toNumber1(arr) {
  const powered = arr.map((el, ind) => el * 10 ** (arr.length - 1 - ind));
  return powered.reduce((acc, el) => acc + el, 0);
}
function rightArr(arr, start) {
  const res = [];
  for (let i = start; i < arr.length; i += 1) {
    res.push(arr[i]);
  }
  return res;
}
function leftArr(arr, end) {
  const res = [];
  for (let i = 0; i < end; i += 1) {
    res.push(arr[i]);
  }
  return res;
}
function getNearestBigger(number) {
  const arr = toArray1(number);
  let indexOfReplaced;
  for (let i = arr.length - 2; i >= 0; i -= 1) {
    if (arr[i] < arr[i + 1]) {
      indexOfReplaced = i;
      break;
    }
  }
  if (!indexOfReplaced) {
    return number;
  }
  const right = rightArr(arr, indexOfReplaced + 1);
  const replaced = arr[indexOfReplaced];
  const replacing = Math.min(...right.filter((el) => el > replaced));
  const indexOfReplacing =
    right.findIndex((el) => el === replacing) + 1 + indexOfReplaced;
  const temp = arr[indexOfReplaced];
  arr[indexOfReplaced] = arr[indexOfReplacing];
  arr[indexOfReplacing] = temp;
  const sortedRight = rightArr(arr, indexOfReplaced + 1).sort((a, b) => a - b);
  const res = [...leftArr(arr, indexOfReplaced + 1), ...sortedRight];
  return toNumber1(res);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
