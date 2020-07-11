//SOLUTION 1
const array = [5, 4, 3, 2, 1];
const array1 = [19, 5, 42, 2, 77];
const array2 = [10, -343445353, 3453445, 3453545353453];

const addLowest = (arrayToSort) => {
  const sorted = arrayToSort.sort(function (a, b) {
    return a - b;
  });
  const sum = sorted[0] + sorted[1];
  return sum;
};
console.log(addLowest(array2));

//SOLUTION 2
const array4 = [19, 5, 42, 2, 77];
const array5 = [10, 343445353, 3453445, 3453545353453];
const array6 = [5, 4, 3, 2, 1];

const sumLowestInArray = (someArray) => {
  for (var i = 1; i < someArray.length; i++)
    for (var j = 0; j < i; j++)
      if (someArray[i] < someArray[j]) {
        var x = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = x;
      }
  let lowestSum = someArray[0] + someArray[1];
  return lowestSum;
};
console.log(sumLowestInArray(array5));