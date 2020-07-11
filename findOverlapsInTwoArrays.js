let arr1 = ["a", "b", "c", "a", "a", "b", "d"];
let arr2 = ["a", "b", "b", "a", "e", "c", "c", "g"];

//reduce arrays to counted objects
const countArr1 = {};
arr1.forEach(function (letter) {
  if (countArr1.hasOwnProperty(letter)) {
    countArr1[letter]++;
  } else {
    countArr1[letter] = 1;
  }
});
console.log(countArr1);

const countArr2 = {};
arr2.forEach(function (letter) {
  if (countArr2.hasOwnProperty(letter)) {
    countArr2[letter]++;
  } else {
    countArr2[letter] = 1;
  }
});
console.log(countArr2);

let result = [];
for (let prop1 in countArr1) {
  for (let prop2 in countArr2) {
    if (prop1 === prop2) {
      // console.log(prop1); //= 'a', 'b', 'c'
      // console.log(countArr1[prop1]); //= number of times letter occurs in first array
      //console.log(countArr2[prop2]);//= number of times letter occurs in second array

      let numLeastOverlap = [];
      numLeastOverlap = Math.min(countArr1[prop1], countArr2[prop2]);
      for (let i = 0; i < numLeastOverlap; i++) {
        console.log(prop1);
        result.push(prop1);
      }
    }
  }
}
console.log(result);