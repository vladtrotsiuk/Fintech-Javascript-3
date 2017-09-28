/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
 function getMinMax(string) {
   let arr = string.split(/[ ,/;!?]/)
   for (let i = 0; i < arr.length; i++){
     if (isNaN(arr[i]) || arr[i] === "") {
       arr.splice(i,1)
       i--
     }
   }
   let minimum = Math.min.apply(null,arr)
   let maximum = Math.max.apply(null,arr);
   return {min:minimum, max: maximum}
 }

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
 function fibonacciSimple(x) {
   if (x === 0) return 0
   if (x === 1) return 1
   return fibonacciSimple(x-1)+ fibonacciSimple(x - 2)
 }

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
 function fibonacciWithCache(x) {
   let cache = {}
     function fibonacciSimple(x) {
     let answer
     if (x in cache) answer = cache[x]
     else {
       if (x === 0) return 0
       if (x === 1) return 1
       answer = fibonacciSimple(x-1)+ fibonacciSimple(x - 2)
       cache[x] = answer
       }
       return answer
     }
   return fibonacciSimple(x);
 }

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
   let count = 0
   let nstring = 0
   let delta = Math.ceil(max / cols)
   let string =''
   let number = 0
   let space = ' '
   let space1 = ' '
   for (i = 0; i < max + 1; i++){
     count++
     if (number < 10) {space = ' '} else space = ''
     if (count  === cols || number === max) {space1 = ''} else space1 = ' '
     string = string + space + number + space1
     number += delta
     if (count === cols){
       if (nstring + 1 != delta) {string += '\n'}
       count = 0
       nstring++
       number = nstring
     }
   }
   return string
 }

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
 function rle(input) {
   let ch = input[0]
   let count = 1
   input += ' '
   for (let i = 0; i < input.length-1; i++){
     if (ch != input[i+1]) {
       if (count != 1){
         input = input.substring(0, i+1) + count + input.substring(i+1)
         i++
        }
       ch = input[i+1]
       count = 1
      }
      else {
            input = input.substring(0,i) + input.substring(i+1)
            count++
            i--
           }
     }
     return input.substring(0,input.length - 1)
 }

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
