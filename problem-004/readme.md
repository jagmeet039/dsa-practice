# Problem 4: groupBy(arr, key)
Write a function groupBy that takes an array of objects and a property name (as a string), and returns an object where:

The keys are the unique values of the specified property.

The values are arrays of objects that have that specific property value.

Example Inputs & Outputs
# Example 1:
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];

groupBy(users, 'age');
Output:
{
  "25": [
    { name: "Alice", age: 25 },
    { name: "Charlie", age: 25 }
  ],
  "30": [
    { name: "Bob", age: 30 }
  ]
}
# Example 2:

const products = [
  { id: 1, category: 'Electronics' },
  { id: 2, category: 'Clothing' },
  { id: 3, category: 'Electronics' }
];

groupBy(products, 'category');
Output:

{
  "Electronics": [
    { id: 1, category: 'Electronics' },
    { id: 3, category: 'Electronics' }
  ],
  "Clothing": [
    { id: 2, category: 'Clothing' }
  ]
}

Constraints & Edge Cases
The input array may be empty. In that case, return an empty object {}.

The key values can be of any type (number, string, etc.), but they will be coerced to strings when used as object keys.

