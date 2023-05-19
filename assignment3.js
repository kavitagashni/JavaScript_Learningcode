//write a function which takes array of strings as a argument and return a object with Arr[i] as a key and count as a value

//input ['abc','def','cde','abc','def','elc'] 
// output
// {
//  'abc': 2,
//  'def': 2,
//  'cde': 1,
//  'elc': 1
// }



// function findArrayEleCount(array) {
//      let result = {}
//     // for (let i = 0; i < array.length; i++) {
//     //     result[array[i]] = (Number(result[array[i]]) || 0) + 1;

//     // }
//     // return result
//     // return array.reduce((acc,el)=>{
//     //     acc[el] = (acc[el] || 0) + 1;
//     //     return acc;
//     // },{})

//     // for (const c of array) {
//     //     result[c] = (result[c] || 0) + 1;
//     // }
//     // return result;
 
// }
// console.log(findArrayEleCount(['abc', 'def', 'cde', 'abc', 'def', 'elc']));

//lexical structure (1-2day)
// data-types (1/2 day)
// operations data
 // --   String --Number --boolean
 // array and object (2-3)
 // General topic loops, conditional statements, operators  <>!&&||
 
 	// Assigning values
     let val1 = 7;
     let val2 = -"6";
     
     // Logical !(NOT) Operator
     console.log(!val1);
 
     // Logical &&(AND) Operator
     console.log( val1 && val2 );
     
     // Lgical ||(OR) Operator
     console.log( val1 || val2 );