function removeDuplicates(arr) {
  //using Set data Structure, simple and fast
  let result = [...new Set(arr)];
  return result;

  //using include and loop
  let result2 = [];
  for(let i=0; i<arr.length;i++){
    if(!result2.includes(arr[i])){
        result2.push(arr[i])
    }
  }
  return result2;
}





console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// Output: [1, 2, 3, 4]

console.log(removeDuplicates(["a", "b", "a", "c"]));
// Output: ["a", "b", "c"]

console.log(removeDuplicates([1, "1", 1]));
// Output: [1, "1"]

console.log(removeDuplicates([]));
// Output: []

console.log(removeDuplicates([true, false, true]));
// Output: [true, false]


module.exports = removeDuplicates;
