/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const arr = string.split(/[ ,\;!?]/);

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) || arr[i] === '') {
      arr.splice(i, 1);
      i--;
    }
  }
  const minimum = Math.min.apply(null, arr);
  const maximum = Math.max.apply(null, arr);

  return { min: minimum, max: maximum };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
const fibonacciWithCache = (function() {
  const memo = {};

  function fibonacci(x) {
    let value;

    if (x in memo) {
      value = memo[x];
    } else {
      value = (x === 0 || x === 1) ? x : fibonacci(x - 1) + fibonacci(x - 2);
      memo[x] = value;
    }
    return value;
  }

  return fibonacci();
}());

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  const delta = Math.ceil(max / cols);
  let count = 0,
    nstring = 0,
    string = '',
    number = 0,
    space = ' ',
    space1 = ' ';

  for (let i = 0; i < max + 1; i++) {
    count++;
    space = (number < 10) ? ' ' : '';
    space1 = (count === cols || number === max) ? '' : ' ';
    string = string + space + number + space1;
    number += delta;
    if (count === cols) {
      if (nstring + 1 !== delta) {
        string += '\n';
      }
      count = 0;
      nstring++;
      number = nstring;
    }
  }
  return string;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let ch = input[0],
    count = 1,
    newString = `${input} `;

  for (let i = 0; i < newString.length - 1; i++) {
    if (ch !== newString[i + 1]) {
      if (count !== 1) {
        newString = newString.substring(0, i + 1) + count + newString.substring(i + 1);
        i++;
      }
      ch = newString[i + 1];
      count = 1;
    } else {
      newString = newString.substring(0, i) + newString.substring(i + 1);
      count++;
      i--;
    }
  }
  return newString.substring(0, newString.length - 1);
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
