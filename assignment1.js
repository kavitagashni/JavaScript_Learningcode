// create a function which takes string as a argument return

// if argument string contains vowel(a,i,e,o,u) in first letter return string + ay e.g  "aditya" -> adityaay
// if string not contain any vowel return string + way e.g Mksh -> Mksyway
// if string contains vowel in middle ->mkesh -> eshmkay , mukesh -> ukeshmay (text-after-vowel(including first vowel) + text-before-firstvowel + ay)


// function findVowel(element) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     if (vowels.includes(element[0])) {
//         return `${element}ay`
//     }

    // let isnoVowel = true;

    // for (let c of element) {
    //     if (vowels.includes(c)) {
    //         isnoVowel = false;
    //         break;
    //     }
    // }
    // if (isnoVowel) {
    //     return `${element}way`
    // }

    // let str = "";

    // for (const c of element) {
    //     if (vowels.includes(c)) {
    //         break;
    //     } else {
    //         str += c;
    //     }
    // }
    // return `${element.replace(str, '')}${str}ay`;
// }

// console.log(findVowel("adyt"));
// console.log(findVowel("rmsatzl"));
// console.log(findVowel("ddadiyta"));
// console.log(findVowel("zzbbcc"))
