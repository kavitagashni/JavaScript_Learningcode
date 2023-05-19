//create a funtion which take array as a arugment and 
//return a new Array even subscipt Array(0,2,4,6,8,10) are on same position and odd subscripts Array(1,3,5,7,9,11) are shuffle
//[1,2,3,4,5,6]
// [1,6,3,2,5,4],[1,2,3,6,5,4]
// ele % 2 == 0 ? newArray.push("xyz") : newArray.push(ele);

function EvenNumExchange(array) {
    var evenNumArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumArray.push(array[i]);
        }
    }

    for (var j = evenNumArray.length - 1; j > 0; j--) {
        var randomIndex = Math.floor(Math.random() * (j + 1));
        var temp = evenNumArray[j];
        evenNumArray[j] = evenNumArray[randomIndex];
        evenNumArray[randomIndex] = temp;
    }

    var evenIndex = 0;
    for (var k = 0; k < array.length; k++) {
        if (array[k] % 2 === 0) {
            array[k] = evenNumArray[evenIndex];
            evenIndex++;
        }
    }

}
var arrayofNumbers = [4, 3, 8, 7, 6];
EvenNumExchange(arrayofNumbers)
console.log("afterShuffle " + arrayofNumbers);



