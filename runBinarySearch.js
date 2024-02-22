// runBinarySearch.js

const fs = require('fs');
const binarySearch = require('./binarySearch');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;

const index = binarySearch(array, target);

const output = `Target ${target} is found at index ${index} in the array.`;

fs.writeFile('binarySearchOutput.txt', output, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Output saved to binarySearchOutput.txt');
    }
});
