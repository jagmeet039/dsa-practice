function groupBy(arr, key) {
    const result = {};
    arr.forEach((item) => {
        const keyValue = item[key];  
        if(!result.hasOwnProperty(keyValue)){  
            result[keyValue] = [];   
        }
        result[keyValue].push(item); 
    })

    return result;
}

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }];

console.log(groupBy(users, 'age'));
// Output:
// {
//   "25": [
//     { name: "Alice", age: 25 },
//     { name: "Charlie", age: 25 }
//   ],
//   "30": [
//     { name: "Bob", age: 30 }
//   ]
// }