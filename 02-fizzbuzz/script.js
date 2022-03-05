/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(n) {
    if (n % 5 === 0 && n % 3 === 0) {
        return 'fizzBuzz';
    }
    if (n % 3 === 0) {
        return 'fizz';
    } 
    if (n % 5 === 0) {
        return 'buzz';
    }
return n;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));
console.log(fizzBuzz(1));
console.log(fizzBuzz(10));