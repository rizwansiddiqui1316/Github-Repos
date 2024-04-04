/*
!we will cover all arrays methods
1: creating arrays
2: accessing elements
3: modifying elements
4: array traversal
5: array iteration
6: insert/add/replace/delete elements in array (CRUD)
7: searching in array
8: filtering array
9: sorting array
10: accumulating array
*/
//* ############### array contains similar type of data, we can add different types of data but it is not recommended ############### */

//* ############### Note ############### */
/*
!1: arrays are mutable
!2: arrays are ordered
!3: iterable -> any object on which we can use for-of loop.
!4: array like object -> any object with length property and have indexes
*/

//* ############### creating arrays ############### */
// !creating arrays
// we can create array using array constructor and without array constructor
// 1: using array constructor
let fruits1 = new Array('apple', 'orange', 'banana');
console.log(fruits1);

// 2: using array literals 
let fruits2 = ['apple', 'orange', 'banana']
console.log(fruits2);

//* ############### accessing elements ############### */
// !accessing elements
console.log(fruits1[0]);
console.log(fruits1[1]);
console.log(fruits1['apple']); //! undefined, we can use indexes to access

//* ############### modifying elements ############### */
// !modifying elements
fruits1[0] = "grapes";
console.log(fruits1);

//* ############### array traversal ############### */
// !array traversal
/*
! 1: for-of loop -> it will give us elements of array
! 2: for-in loop -> it will give us indexes of array
! 3: for-each loop -> it will give us elements/indexes of array
*/
let fruits3 = ['apple', 'orange', 'banana', 'mango']
for (let element of fruits3) {
    console.log(element);
}

let fruits4 = ['apple', 'orange', 'banana', 'mango']
for (let index in fruits4) {
    console.log(index);
}

let fruits5 = ['apple', 'orange', 'banana', 'mango']
let fruits5ForEach = fruits5.forEach((currentElement, index, array) => {
    console.log(currentElement);
    console.log(index);
    console.log(array);
    return array[index] = "Js";
})
console.log(fruits5);
console.log(fruits5ForEach); //! we will get undefined, forEach returns nothing, its only to display data on screen BUT it can also modify data in our original array because arrays are mutable so we can use it to modify arrays also

let fruits6 = ['apple', 'orange', 'banana', 'mango']
let fruits6Map = fruits6.map((currentElement, index, array) => {
    console.log(currentElement);
    console.log(index);
    console.log(array);
    return array[index] = "Js";
})
console.log(fruits6);
console.log(fruits6Map); //! we will get a new array, map method returns a new array of our choice, BUT it can also modify data in our original array because arrays are mutable

//* ############### write a code to multiply each element of array with 5 ############### */
console.log("############### write a code to multiply each element of array with 5 ###############");

let myNumbers1 = [1, 2, 3, 4, 5];
myNumbers1.forEach((currentElement) => {
    console.log(currentElement * 5);
})
let myNumbers1Map = myNumbers1.map((currentElement) => {
    return currentElement * 5;
})
console.log(myNumbers1Map); //! we will get a new array

//* ############### chaining ############### */
/*
!1: for-Each -> with forEach we can not do chaining because it does not return any value 
!2: map -> with map we can do chaining because it returns value
*/

//* ############### insert/add/replace/delete elements in array (CRUD) ############### */
console.log("############### insert/add/replace/delete elements in array (CRUD) ###############");
/*
!1: push() -> this method can add element at the end of array
!2: pop() -> this method can delete element from the end of array
!3: unShift() -> this method can add one/more elements at the start of array
!4: shift() -> this method can delete first element at the start of array
!5: splice() -> this method can add/delete/replace elements anywhere in between existing elements of array
*/

let fruits7 = ['apple', 'orange', 'banana', 'mango'];
console.log(fruits7.push('grapes')); //! push method returns new(length) of array
console.log(fruits7);

let fruits8 = ['apple', 'orange', 'banana', 'mango'];
console.log(fruits8.pop()); //! pop method returns the last deleted element of array
console.log(fruits8);

let fruits9 = ['apple', 'orange', 'banana', 'mango'];
console.log(fruits9.unshift("grapes", "mint")); //! unShift method returns the new(length) of array
console.log(fruits9);

let fruits10 = ['apple', 'orange', 'banana', 'mango'];
console.log(fruits10.shift()); //! shift method returns deleted element of array at index 0
console.log(fruits10);

let fruits11 = ['apple', 'orange', 'banana', 'mango'];
//! splice(startIndex, deleteCount, addingItems(item1, item2...))
console.log(fruits11.splice());
console.log(fruits11.splice(1, 2, "coco", "butter")); //! splice method will always return new array of deleted elements from our original array and modify our original array
console.log(fruits11);
fruits11.splice(fruits11.length, 0, "peach"); //! 'fruits11.length' start point means at the end of array, 0 means nothing to delete, so add peach at the end of array
console.log(fruits11);

//* ############### splice example ############### */
console.log("############### splice example ###############");

const months1 = ["Jan", "march", "April", "June", "July"];

//! 1: Add Dec at the end of array
months1.splice(months1.length, 0, "Dec");
console.log(months1);

//! 2: splice method returns empty array if nothing deleted from original array and only added new elements into original array

//! 3: update march -> March
let indexToBeUpdated = months1.indexOf("march");
months1.splice(indexToBeUpdated, 1, "March");
console.log(months1);

//! 4: delete June from array
months1.splice(months1.indexOf("June"), 1)
console.log(months1);

//* ############### searching in array ############### */
console.log("############### searching in array ###############");

/*
!1: indexOf() -> returns the first index of a given element inside array, if element not found then returns -1

!2: lastIndexOf() -> returns the last index of a given element inside array, if element not found then returns -1

!3: includes() -> methods returns true/false if the element present inside array

!4: find(callback same as map method) -> method returns the only first ever element fulfilling the required logical condition, otherwise returns undefined

!5: findIndex(callback same as map method) -> method returns the index of only first ever element fulfilling the required logical condition, otherwise returns -1

!6: filter(callback same as map method) -> method returns the array of elements fulfilling the required logical condition, otherwise returns empty array[]

*/

//!1: indexOf() -> returns the first index of a given element inside array, if element not found then returns -1
//? syntax -> indexOf(elementToBeFind, startIndex)
let fruits12 = ['apple', 'orange', 'banana', 'mango', 'orange', 'mango'];
console.log(fruits12.indexOf("orange", 0));

//!2: lastIndexOf() -> returns the last index of a given element inside array, if element not found then returns -1
//? syntax -> lastIndexOf(elementToBeFind, startIndex)
console.log(fruits12.lastIndexOf("orange"));
console.log(fruits12.lastIndexOf("orange", 3)); //? if we give start index then it will start finding backwards

//!3: includes() -> methods returns true/false if the element present inside array
console.log(fruits12.includes("orange")); //! true

//!4: find(callback same as map method) -> method returns the only first ever element fulfilling the required logical condition, otherwise returns undefined
let myNumbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(myNumbers2.find((currentElement, index, array) => {
    return currentElement % 2 === 0;
})); //? it will return 10 because 10 is the first element fulfilling the required logical condition

//!5: findIndex(callback same as map method) -> method returns the index of only first ever element fulfilling the required logical condition, otherwise returns -1
let myNumbers3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(myNumbers3.findIndex((currentElement, index, array) => {
    return currentElement % 2 === 0;
})); //? it will return 0 because 10 is the first element fulfilling the required logical condition and index of 10 is 0

//!6: filter(callback same as map method) -> method returns the array of elements fulfilling the required logical condition, otherwise returns empty array[]
let myNumbers4 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let myNumbers4Filter = myNumbers4.filter((currentElement, index, array) => {
    return currentElement % 3 === 0;
});
console.log(myNumbers4); //? original array remains the same
console.log(myNumbers4Filter); //? new array of all the elements fully divided by 3 from the original array

//* ############### question: delete 60 ############### */
console.log("############### question: delete 60 ###############");
let myNumbers5 = [10, 20, 30, 40, 60, 50, 60, 70, 80, 90];
let myNumbers5Deleted60 = myNumbers5.filter((currentElement, index, array) => {
    return currentElement !== 60;
});
console.log(myNumbers5); //? still having 60 original array
console.log(myNumbers5Deleted60); //? new array having all elements except 60

//* ############### question: filtering products by price ############### */
console.log("############### question: filtering products by price ###############");
const myProducts1 = [
    { name: "Laptop", price: 2000 },
    { name: "Mobile", price: 1500 },
    { name: "Printer", price: 1000 },
    { name: "Scanner", price: 500 }
]
//! filter the products with price less than or equal 1200
const myProducts1Below1200 = myProducts1.filter((currentElement, index, array) => {
    return currentElement.price <= 1200;
});
console.log(myProducts1);
console.log(myProducts1Below1200);

//* ############### question: filter unique values only ############### */
console.log("############### question: filter unique values only ###############");
let myNumbers6 = [10, 20, 30, 40, 60, 50, 60, 70, 80, 90];
let myNumbers6UniqueValues = myNumbers6.filter((currentElement, index, array) => {
    //! we only want equal indexes to have unique values 
    console.log(array.indexOf(currentElement), index);
    return array.indexOf(currentElement) === index;
})
console.log(myNumbers6UniqueValues);

//* ############### sorting array ############### */
console.log("############### sorting array ###############");
let myAbc1 = ['eeeee', 'dddd', 'ccc', 'bb', 'a'];
let myNumbers7 = [90, 20, 30, 80, 60, 50, 70, 40, 10];

console.log(myAbc1.sort()); //! original array ko sort kar de ga
// console.log(myNumbers7.sort()); //! original array ko sort kar de ga

console.log(myAbc1.sort((a, b) => a.length - b.length)); //! sort based on length(shortest to longest) of string
console.log(myAbc1.sort((a, b) => b.length - a.length)); //! sort based on length(longest to shortest) of string

console.log(myNumbers7.sort((a, b) => a - b)); //! sort ascending order
console.log(myNumbers7.sort((a, b) => b - a)); //! sort descending order

//* ############### question: sort and map on the basis of string length and write length before the string ############### */
console.log("############### question: sort and map on the basis of string length and write length before the string ###############");
let fruits13 = ['apple', 'orange', 'banana', 'mango', 'orange', 'mango'];
console.log(fruits13.map((currentElement, index, array) => {
    let length = currentElement.length;
    return `${length}: ${currentElement}`;
}).sort((a, b) => {
    return a.length - b.length;
}));

//* ############### question: sort and map on the basis of number multiplied with itself and filter values less than 50 ############### */
console.log("############### question: sort and map on the basis of number multiplied with itself and filter values less than 50 ###############");
let myNumbers8 = [9, 2, 3, 8, 6, 5, 7, 4, 1];
console.log(myNumbers8.sort((a, b) => { return a - b }).map((currentElement, index, array) => {
    return currentElement * currentElement;
}).filter((currentElement, index, array) => {
    return currentElement < 50;
}));

//* ############### accumulating array ############### */
console.log("############### accumulating array ###############");
//! for accumulating array we have a reduce method which adds up all the values of the array elements into a single number

let myNumbers9 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(myNumbers9.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}, 0));