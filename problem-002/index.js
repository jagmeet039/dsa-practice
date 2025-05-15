function flattenArray(arr) {
    //Using Recursion and Reduce
    let result1 = arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val)
    },[])
    return result1;

    //without recursion
    let copy = [...arr];
    let result2 = [];
    while(copy.length){
        let ele = copy.pop();
        if(Array.isArray(ele)){
            copy.push(...ele)
        }else{
            result2.unshift(ele)
        }
    }
    return result2;

     //using only recursion
    let result3 = [];
    for(let ele of arr){
        if(Array.isArray(ele)){
            result3 = result3.concat(flattenArray(ele))
        }else{
            result3.push(ele)
        }
    }
    return result3;
}

//For the purpose of user debugging.
console.log(flattenArray([1, [2, [3, 4], 5], 6]));
// Output: [1, 2, 3, 4, 5, 6]

console.log(flattenArray([["a"], ["b", ["c", "d"] ], "e"]));
//Output: ["a", "b", "c", "d", "e"]
