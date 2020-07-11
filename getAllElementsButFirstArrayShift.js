/*
Write a function called "getAllElementsButFirst".
Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.
*/
const input = [1, 2, 3, 4];
function getAllElementsButFirst(array) {
    array.shift();
    return array;  
  } //no semicolon needed if 'function' keyword used

const output = getAllElementsButFirst(input);
console.log(output);