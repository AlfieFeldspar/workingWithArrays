/*
Write a function called "removeFromBack".
Given an array, "removeFromBack" returns a new array containing all but the last element of the given array.
console.log(arr);// --> [1, 2, 3]
console.log(output);// --> [1, 2]
*/
const arr = [1, 2, 3];
function removeFromBack(arr) {
  return arr.slice(0, -1);
}
const output = removeFromBack(arr);
console.log(output);
console.log(arr);