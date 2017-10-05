/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
 function customBind(func, context, ...args) {
   return function(...extraargs) {
     return func.apply(context, ...args, ...extraargs);
   };
 }

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
 function sum(x) {
   return x === undefined ? 0 : (y) => y === undefined ? x : sum(x + y);
 }

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
 function anagram(first, second) {
   return (first.split('').sort().join('')===second.split('').sort().join('')?true:false);
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
 function getUnique(arr) {
   function compareNumbers(a, b) {
   return a - b;
 }
   arr = arr.sort(compareNumbers)
   let temp = arr[1];
   for (let i = 1; i < arr.length; i++){
     if (arr[i] == arr[i - 1]) {
       arr.splice(i - 1, 1)
       i--
       console.log(1)
     }
   }
   return arr;
 }

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
 function getIntersection(first, second) {
   let arr = [];
   for (let i = 0; i < first.length; i++){
     if (arr.indexOf(first[i]) === -1 && second.indexOf(first[i]) !== -1) {
       arr.push(first[i])
     }
   }
   for (let i = 0; i < second.length; i++){
     if (arr.indexOf(second[i]) === -1 && first.indexOf(second[i]) !== -1) {
       arr.push(second[i])
     }
   }
    function compareNumbers(a, b) {
    return a - b;
  }
    arr = arr.sort(compareNumbers)
   return arr;
 }
 //УБРАТЬ ВТОРОЙ ЦИКЛ СРАВЕНЕНИЕ ДЛИН И ПРИБАВЛЕНИЕМ РАЗНИЦЫ В count

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
 function isIsomorphic(left, right) {
   let count = 0;
   let length = (left.length > right.length) ? left.length : right.length;
     for (let i = 0; i < length; i++){
       if (left[i] !== right[i]) {
         count++;
       }
   }
   if (count > 1) {
     return false;
   }
   else {
     return true;
   }
 }

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
