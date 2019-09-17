'use strict'

let reverseArray = function (input) {
    if (typeof input !== 'array') {
        return false
    }
    else {
        for (let index = 0; index < input.length; index++) {
            input.push(input[index]);
            input.shift[input[index]];
        }
    }
    return input;
}

module.exports = reverseArray;