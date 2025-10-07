// array.js - JavaScript Array Manipulation Functions

// 1. push() - Adds element(s) to the end of an array
let arr1 = [1, 2, 3];
arr1.push(4); // [1, 2, 3, 4]

// 2. pop() - Removes the last element of an array
let arr2 = [1, 2, 3];
arr2.pop(); // [1, 2]

// 3. unshift() - Adds element(s) to the beginning of an array
let arr3 = [2, 3];
arr3.unshift(1); // [1, 2, 3]

// 4. shift() - Removes the first element of an array
let arr4 = [1, 2, 3];
arr4.shift(); // [2, 3]

// 5. concat() - Joins two or more arrays
let arr5 = [1, 2];
let arr6 = [3, 4];
let combined = arr5.concat(arr6); // [1, 2, 3, 4]

// 6. slice() - Returns a shallow copy of a portion of an array
let arr7 = [1, 2, 3, 4, 5];
let sliced = arr7.slice(1, 3); // [2, 3]

// 7. splice() - Adds/removes elements in an array
let arr8 = [1, 2, 3, 4];
arr8.splice(2, 1, 99); // [1, 2, 99, 4]

// 8. indexOf() - Finds the first index of a value
let arr9 = [10, 20, 30];
arr9.indexOf(20); // 1

// 9. lastIndexOf() - Finds the last index of a value
let arr10 = [1, 2, 3, 2];
arr10.lastIndexOf(2); // 3

// 10. includes() - Checks if an array contains a value
let arr11 = [1, 2, 3];
arr11.includes(2); // true

// 11. find() - Returns first element that satisfies a condition
let arr12 = [5, 10, 15];
arr12.find(x => x > 7); // 10

// 12. findIndex() - Returns index of first element that satisfies a condition
let arr13 = [5, 10, 15];
arr13.findIndex(x => x > 7); // 1

// 13. filter() - Returns all elements that match a condition
let arr14 = [1, 2, 3, 4];
arr14.filter(x => x % 2 === 0); // [2, 4]

// 14. map() - Transforms each element and returns a new array
let arr15 = [1, 2, 3];
arr15.map(x => x * 2); // [2, 4, 6]

// 15. reduce() - Reduces array to a single value
let arr16 = [1, 2, 3, 4];
arr16.reduce((sum, x) => sum + x, 0); // 10

// 16. forEach() - Executes a function for each element
let arr17 = [1, 2, 3];
arr17.forEach(x => console.log(x)); // logs 1, 2, 3

// 17. sort() - Sorts array elements
let arr18 = [3, 1, 2];
arr18.sort(); // [1, 2, 3]

// 18. reverse() - Reverses the array
let arr19 = [1, 2, 3];
arr19.reverse(); // [3, 2, 1]

// 19. join() - Joins all elements into a string
let arr20 = ["a", "b", "c"];
arr20.join("-"); // "a-b-c"

// 20. toString() - Converts array to string
let arr21 = [1, 2, 3];
arr21.toString(); // "1,2,3"

// 21. flat() - Flattens nested arrays
let arr22 = [1, [2, [3]]];
arr22.flat(2); // [1, 2, 3]

// 22. flatMap() - Maps and flattens array
let arr23 = [1, 2, 3];
arr23.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

// 23. every() - Checks if all elements satisfy a condition
let arr24 = [2, 4, 6];
arr24.every(x => x % 2 === 0); // true

// 24. some() - Checks if at least one element satisfies a condition
let arr25 = [1, 3, 5, 6];
arr25.some(x => x % 2 === 0); // true

// 25. fill() - Fills array with a static value
let arr26 = [1, 2, 3];
arr26.fill(0); // [0, 0, 0]

// 26. copyWithin() - Copies part of an array within itself
let arr27 = [1, 2, 3, 4, 5];
arr27.copyWithin(0, 3); // [4, 5, 3, 4, 5]

// 27. keys() - Returns an iterator of array keys
let arr28 = ["a", "b"];
for (let k of arr28.keys()) console.log(k); // 0, 1

// 28. values() - Returns an iterator of array values
let arr29 = ["a", "b"];
for (let v of arr29.values()) console.log(v); // "a", "b"

// 29. entries() - Returns key-value pairs iterator
let arr30 = ["a", "b"];
for (let [i, v] of arr30.entries()) console.log(i, v); // 0 "a", 1 "b"

// 30. Array.isArray() - Checks if a value is an array
Array.isArray([1, 2, 3]); // true
Array.isArray("hello"); // false
