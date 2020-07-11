//Write a function that takes an array of integers and finds the pair of adjacent elements that has the largest product.
//Return that product.

function findLargestProduct(arr) {
  let newProduct = 0;
  let finalProduct = 0;

  for (i = 0; i < arr.length; i++) {
    if (!arr[i + 1]) {
      return finalProduct;
    }
    newProduct = arr[i] * arr[i + 1];
    finalProduct = newProduct >= finalProduct ? newProduct : finalProduct;
  }
}
console.log(findLargestProduct([9, 5, 10, 2, 24, -1, -48]));