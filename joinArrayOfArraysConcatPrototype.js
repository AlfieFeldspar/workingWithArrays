/*
Write a function called "joinArrayOfArrays".
Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.
*/

function joinArrayOfArrays(arr) {
    let newArray = Array.prototype.concat.apply([], arr);
    return newArray;  
  }

let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output);