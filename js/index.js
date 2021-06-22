'use strict';

// Напишите функцию printNumbers(from, to, interval), 
// которая последовательно выводит в консоль целые числа, 
// начиная от from и заканчивая to, с интервалом между выводом соседних чисел в interval мс.
// Реализуйте первый или *оба варианта решения:
// - Используя setInterval.
// - *Используя рекурсивный setTimeout


// 1
/**
 * 
 * @param {number} from - only integer number 
 * @param {number} to - only integer number 
 * @param {number} interval - only integer number 
 */
function printNumbers1(from, to, interval) {

    let counter = 1;

    for(let i = from; i <= to; i++) {
        setTimeout( () => {
            console.log('i :>> ', i);
        }, interval * counter++);
    };
};

// printNumbers1(0, 5, 1000);


// 2
/**
 * 
 * @param {number} from - only integer number 
 * @param {number} to - only integer number 
 * @param {number} interval - only integer number 
 */
function printNumbers2(from, to, interval) {
    
    let item = from;

    /**
     * 
     * @param {function} timerName 
     */
    const show = timerName => {

        console.log(item);
      
        if (item === to) {
            clearInterval(timerName);
        };
            
        item++;
    };

    const timerId = setInterval( () => show(timerId), interval);
};

// printNumbers2(0, 5, 300);


// 3
/**
 * 
 * @param {number} from - only integer number 
 * @param {number} to - only integer number 
 * @param {number} interval - only integer number 
 */
function printNumbers3(from, to, interval) {
  
    const show = () => {
        let item = from;

        return function run() {
            console.log('item >>> ', item);
    
            if (item < to) {
                setTimeout(run, interval);
            };
            item++;
        };
    };

    setTimeout( () => show()(), interval);
};

// printNumbers3(1, 3, 2000);
