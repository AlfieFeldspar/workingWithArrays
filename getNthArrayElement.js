/*
Write a function called "getNthElement".
Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
Notes:
If the array has a length of 0, it should return 'undefined'.
 // --> 3
*/
const myArray1 = [2, 3, 7, 8, 12, 4, 29];
const myArray2 = [];

const getNthElement = (arr, n) => {
  return arr[n];
};
const output1 = getNthElement(myArray1, 3);
const output2 = getNthElement(myArray2, 3);

console.log(output1);
console.log(output2);