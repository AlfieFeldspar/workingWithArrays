/*
Write a function called "findShortestWordAmongMixedElements".
Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.
Notes:
* Expect the given array to have values other than strings.
* TEST1: [4, 'two', 2, 'three'] returns 'two'
* TEST2: If there are ties, it should return the first element to appear in the given array.
* TEST3: If the given array is empty, it should return an empty string.
* TEST4: If the given array contains no strings, it should return an empty string.
var output = findShortestWordAmongMixedElements();
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
  let stringArr = [];
  let otherArr = [];
  arr.forEach((element) => {
    if (typeof element === "string") {
      stringArr.push(element);
    } else {
      otherArr.push(element);
    }
  });
  if (stringArr.length === 0) {
    let empty = "";
    return empty;
  } else {
    let reducer = (acc, curr) => (acc.length <= curr.length ? acc : curr);
    let min = stringArr.reduce(reducer);
    return min;
  }
}

let test1 = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
let test2 = findShortestWordAmongMixedElements([4, "one", 2, "two", "three"]);
let test3 = findShortestWordAmongMixedElements([]);
let test4 = findShortestWordAmongMixedElements([4, 2, 55]);

console.log(test1);
console.log(test2);
console.log(`this is an empty string: ${test3}, I think`);
console.log(`this is an empty string: ${test4}, I think`);
