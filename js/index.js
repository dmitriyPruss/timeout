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

    validateData();
    let counter = 1;

    for(let i = from; i <= to; i++) {
        setTimeout( () => {
            console.log('i :>> ', i);
        }, interval * counter++);
    };
};

printNumbers1(-10, -5, 100);

// 2
/**
 * 
 * @param {number} from - only integer number 
 * @param {number} to - only integer number 
 * @param {number} interval - only integer number 
 */
function printNumbers2(from, to, interval) {
    validateData();
    
    let item = from;

    /**
     * 
     * @param {function} timerName 
     *
     */
    const show = timerName => {
        console.log('item :>> ', item);
      
        if (item === to) {
            clearInterval(timerName);
        };
            
        item++;
    };

    const timerId = setInterval( () => show(timerId), interval);
};

printNumbers2(0, 5, 500);


// 3
/**
 * 
 * @param {number} from - only integer number 
 * @param {number} to - only integer number 
 * @param {number} interval - only integer number 
 */
function printNumbers3(from, to, interval) {
    validateData();
  
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


/**
 * 
 * @param {number} from 
 * @param {number} to 
 * @param {number} interval 
 */
function validateData(from = 0, to = 0, interval = 0) {
    if (typeof from !== 'number' || typeof to !== 'number' || typeof interval !== 'number') {
        throw new TypeError('Parameter is not a number!');
    };
    if (Number.isNaN(from) || !Number.isSafeInteger(from) || from > to) {
        throw new RangeError('False range for from!');
    };
    if (Number.isNaN(to) || !Number.isSafeInteger(to) || from < to) {
        throw new RangeError('False range for to!');
    };
    if ( Number.isNaN(interval) || !Number.isSafeInteger(interval) || interval < 0) {
        throw new RangeError('False range for interval!');
    };
};
