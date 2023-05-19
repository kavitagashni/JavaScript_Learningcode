//write a function which takes array of strings as a argument and return a object with Arr[i] as a key and count as a value

//input ['abc','def','cde','abc','def','elc'] 
// output
// {
//  'abc': 2,
//  'def': 2,
//  'cde': 1,
//  'elc': 1
// }



function findArrayEleCount(array) {
 let result = {};
 for (const c of array) {
        result[c] = (result[c] || 0) + 1;
    }
 return result;
 
}
console.log(findArrayEleCount(['abc', 'def', 'cde', 'abc', 'def', 'elc']));

