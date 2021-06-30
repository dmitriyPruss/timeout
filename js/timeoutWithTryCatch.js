'use strict';

// Напишите функцию printNumbers(from, to, interval), 
// которая последовательно выводит в консоль целые числа, 
// начиная от from и заканчивая to, с интервалом между выводом соседних чисел в interval мс.
// Реализуйте первый или *оба варианта решения:
// - Используя setInterval.
// - *Используя рекурсивный setTimeout


// 1

// printNumbers1(-1, 5, -300);

/**
 * 
 * @param {number} from - only integer number 
 * @param {number} to - only integer number 
 * @param {number} interval - only integer number 
 */
function printNumbers1(from, to, interval) {

    try {
        validateData(from, to, interval);

        let counter = 1;
    
        for(let i = from; i <= to; i++) {
            setTimeout( () => {
                console.log('item :>> ', i);
            }, interval * counter++);
        };
    } catch (error) {
        if (error instanceof TypeError) {
            alert('It is not a number!');
        };
        if (error instanceof RangeError) {
            alert('False range for parameters!');
        };
    };
};


// 2

// printNumbers2(0, 5, 500);

/**
 * 
 * @param {number} from - only integer number 
 * @param {number} to - only integer number 
 * @param {number} interval - only integer number 
 */
function printNumbers2(from, to, interval) {

    try {
        validateData(from, to, interval);
    
        let item = from;
    
        /**
         * @param {function} timerName 
         */
        const show = timerName => {
            console.log('item :>> ', item);
          
            if (item === to) {
                clearInterval(timerName);
            };
                
            item++;
        };
    
        const timerId = setInterval( () => show(timerId), interval );
    } catch (error) {
        if (error instanceof TypeError) {
            alert('It is not a number!');
        };
        if (error instanceof RangeError) {
            alert('False range for parameters!');
        };
    };
};


// 3

// printNumbers3(1, 5, 200);

/**
 * 
 * @param {number} from - only integer number 
 * @param {number} to - only integer number 
 * @param {number} interval - only integer number 
 */
function printNumbers3(from, to, interval) {

    try {
        validateData(from, to, interval);
  
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
    
        setTimeout( () => show()(), interval );
    } catch (error) {
        if (error instanceof TypeError) {
            alert('It is not a number!');
        };
        if (error instanceof RangeError) {
            alert('False range for parameters!');
        };
    };
};


/**
 * 
 * @param {number} from 
 * @param {number} to 
 * @param {number} interval 
 */
function validateData(from = 0, to = 0, interval = 0) {
    if ( typeof from !== 'number' || typeof to !== 'number' || typeof interval !== 'number' ) {
        throw new TypeError('One of parameters is not a number!');
    };
    if ( !Number.isSafeInteger(from) || from > to ) {
        throw new RangeError('False range for from!');
    };
    if ( !Number.isSafeInteger(to) || to < from ) {
        throw new RangeError('False range for to!');
    };
    if ( !Number.isSafeInteger(interval) || interval < 0 ) {
        throw new RangeError('False range for interval!');
    };
};
