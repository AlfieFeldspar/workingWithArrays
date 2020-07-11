/*
Write a function called "addToBack".
Given an array and an element, "addToBack" returns the given array with the given element added to the end.
Note: It should be the SAME array, not a new array.
*/
let myArr = [1, 2, 7, 9];

function addToBack(arr, element) {
    arr.push(element);
    return arr;  
  };

let output = addToBack(myArr, 3);
console.log(output);