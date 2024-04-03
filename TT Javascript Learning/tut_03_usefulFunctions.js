//* ############### function returning sum ############### */
console.log("############### function returning sum ###############");

function sum() {
    return 5 + 2;
}
console.log(sum());

/* ############### functions can be stored inside variable ############### */
console.log("############### functions can be stored inside variable ###############");
var result = function sum1(a, b) {
    return a + b;
}
console.log(result(10, 4));
// console.log(sum1(10,4)); //! it will give error 'sum1 is not defined'

/* ############### IIFE immediately invoked function expression ############### */

console.log("############### IIFE immediately invoked function expression ###############");
// iife function khudi invoke ho jata hay 
/* syntax of IIFE: 
(function(arg1,arg2){
    // code here
})(arg1,arg2)
*/
(function sum2(a, b) {
    console.log(a + b);
})(11, 11);

var result = (function sum3(a, b) {
    return a + b;
})(15, 2);
console.log("from iife sum3(): ", result);

/* ############### write a function to reverse a string ############### */
console.log("############### write a function to reverse a string ###############");
function reverseStringMethod1(myString) {
    let reverseString = [""];
    let reverseIndex = myString.length - 1;
    // debugger;
    for (let index = 0; index < myString.length; index++) {
        reverseString[index] = myString[reverseIndex];
        reverseIndex--;
    }
    return reverseString;
}
function reverseStringMethod2(myString) {
    let reverseString = "";
    // debugger;
    for (let index = myString.length - 1; index >= 0; index--) {
        reverseString = reverseString + myString[index];
    }
    return reverseString;
}
console.log(reverseStringMethod1("rizwan"));
let reverseNameArray1 = reverseStringMethod1("rizwan");
console.log(reverseNameArray1.join(""));

console.log(reverseStringMethod2("rizwan"));

/* ############### write a function to check palindrome string ############### */
console.log("############### write a function to check palindrome string ###############");
//! we can use reverseStringMethod and then compare both of our strings then return true or false OR we can use the following methods too 
function isPalindromeMethod1(myString) {
    let count = 0;
    let lastIndex = myString.length - 1;
    for (let index = 0; index < myString.length; index++) {
        if (myString[index] === myString[lastIndex]) {
            count += 1;
        }
        lastIndex--;
    }
    return count === myString.length ? true : false //ternary operator
}
function isPalindromeMethod2(myString) {
    let reverseString = "";
    for (let index = myString.length - 1; index >= 0; index--) {
        reverseString = reverseString + myString[index];
    }
    return reverseString === myString ? true : false //ternary operator
}
console.log(isPalindromeMethod1("radar"));
console.log(isPalindromeMethod1("rizwan"));
console.log(isPalindromeMethod2("radar"));
console.log(isPalindromeMethod2("rizwan"));

/* ############### write a function to check palindrome number ############### */
console.log("############### write a function to check palindrome number ###############");
function isNumberPalindromeMethod1(rNumber) {
    // let totalDigits = Math.floor(Math.log10(rNumber) + 1); //method 1
    let count = 0;
    for (; rNumber != 0; count++) {
        rNumber = Math.floor(rNumber / 10);
    }
    let totalDigits = count;
    console.log(totalDigits);
    let nNumber = 0;
    let remainder = 0;
    let tempNumber = rNumber;
    for (let i = 1; i <= totalDigits; i++) {
        remainder = tempNumber % 10; //gives last digit
        tempNumber = Math.floor(tempNumber / 10); //gives number except last digit
        nNumber = (nNumber * 10) + remainder; //making new number from digits
    }
    return nNumber === rNumber ? true : false //ternary operator
}
function isNumberPalindromeMethod2(recNumber) {
    let recString = String(recNumber); //converting into string
    //rest is same as palindrome string check
    let reverseString = "";
    for (let index = recString.length - 1; index >= 0; index--) {
        reverseString = reverseString + recString[index];
    }
    return reverseString === recString ? true : false //ternary operator
}
console.log(isNumberPalindromeMethod1(123454321));
console.log(isNumberPalindromeMethod1(12345));
console.log(isNumberPalindromeMethod2(123454321));
console.log(isNumberPalindromeMethod2(12345));

/* ############### write a function to find the length of any string ############### */
console.log("############### write a function to find the length of any string ###############");

function arrayLength(rArray) {
    let char = 0;
    for (let i = 0; rArray[i] != null; i++) {
        char++;
    }
    return char;
}
console.log(arrayLength(["rizwan"]));
console.log(arrayLength("rizwan"));
console.log(arrayLength(['r', 'i', 'z', 'w', 'a', 'n']));
console.log(arrayLength([1, 2, 3, 4, 5]));
console.log(arrayLength("12345"));

/* ############### write a function to add an element at the end of array ############### */
console.log("############### write a function to add an element at the end of array ###############");

function addElementAtEnd(rArray, rElement) {
    let rArrayLength = arrayLength(rArray);
    rArray[rArrayLength] = rElement;
    return rArray;
}
console.log(addElementAtEnd([1, 2, 3, 4], 5));

/* ############### write a function to delete an element from the end of array ############### */
console.log("############### write a function to delete an element from the end of array ###############");

function deleteElementFromEnd(rArray) {
    let rArrayLength = arrayLength(rArray);
    let nArray = [];
    for (let i = 0; i < rArrayLength - 1; i++) {
        nArray[i] = rArray[i];
    }
    return nArray;

}
console.log(deleteElementFromEnd([1, 2, 3, 4, 5]));

/* ############### write a function to add an element at the start of array ############### */
console.log("############### write a function to add an element at the start of array ###############");

function addElementAtStart(rArray, rElement) {
    let rArrayLength = arrayLength(rArray);
    let nArray = [];
    nArray[0] = rElement;
    for (let i = 1; i <= rArrayLength; i++) {
        nArray[i] = rArray[i - 1];
    }
    return nArray;
}
console.log(addElementAtStart([1, 2, 3, 4], 5));

/* ############### write a function to delete an element at the start of array ############### */
console.log("############### write a function to delete an element at the start of array ###############");

// return arr.indexOf(currentElement) === index;
function deleteElementFromStart(rArray) {
    let rArrayLength = arrayLength(rArray);
    let nArray = [];
    for (let i = 1; i < rArrayLength; i++) {
        nArray[i - 1] = rArray[i];
    }
    return nArray;
}
console.log(deleteElementFromStart([1, 2, 3, 4, 5]));

/* ############### write a code to find unique values inside array ############### */
console.log("############### write a code to find unique values inside array ###############");
const numbers = [1, 1, 1, 1, 1, 2, 3, 4, 7, 7, 8, 9, 9];
const uniqueValues = numbers.filter((currentElement, index, arr) => {
    console.log(arr);
    console.log("currentElement: ", currentElement);
    console.log("1st index of currentElement: ", arr.indexOf(currentElement));
    console.log("index: ", index);
    console.log(arr.indexOf(currentElement) === index);
    return arr.indexOf(currentElement) === index;
})
console.log(uniqueValues);