//* ############### Arithmetic operator ############### */
console.log("############### Arithmetic operator ###############");
var number1 = 17;
var number2 = 5;

console.log(number1 + number2); //*adding two numbers 22

console.log(number1 - number2); //*subtract two numbers 12

console.log(number1 * number2); //*multiply two numbers 85

console.log(number1 / number2); //*divide number1 by number2 3.4

console.log(number1 % number2); //*remainder 2

console.log(number1 ** number2); //*power of 17^5

console.log(++number1); //*18

console.log(--number1); //*17

console.log(number1++); //*17

console.log(number1--); //*18

//* ############### Tricky Question ############### */
console.log("abc" * 2); // * NaN
console.log("abc" / 2); // * NaN
console.log("abc" % 2); // * NaN

//* Note: whenever we / or * or % a number with string then we always get 'NaN'*/

//* ############### Ternary operator ############### */
//! syntax --->>> condition ? expressionIfTrue : expressionIfFalse;

console.log("############### Ternary operator ###############");
console.log(100 > 10 ? "100 is greater than 10" : "100 is not greater than 10");
console.log(100 < 10 ? "100 is less than 10" : "100 is not less than 10");


//* ############### Note ############### */
//! in javascript all the expressions are evaluated from left to right
console.log("10" + 10 + 10); //? 101010
console.log(5 < 15 < 10); //? true because left to right (5 < 15 -> True -> 1) and (1 < 10 -> True)

//* ############### check vote eligibility ############### */
console.log("############### check vote eligibility ###############");
var age = 19;
var citizen = true; //*assume person is citizen
var voterCard = true; //*assume person has voter card

// console.log(age >= 18 && citizen && voterCard ? "Can Cast Vote" : "Cannot Cast Vote");

if (age >= 18 && citizen && voterCard) {
    console.log("Can Cast Vote");
} else if (age < 18 && (citizen || !voterCard)) {
    console.log("not eligible to vote due to age");
} else if (age >= 18 && !citizen) {
    console.log("not eligible to vote due to foreign citizenship");
} else if (age >= 18 && !voterCard) {
    console.log("not eligible due to no voter card");
}

if (age >= 18) {
    if (citizen && voterCard) {
        console.log("Can Cast Vote");
    } else if (!citizen) {
        console.log("not eligible due to foreign citizenship");
    } else if (!voterCard) {
        console.log("not eligible due to no voter card");
    }
} else {
    console.log("not eligible due to age");
}

//* ############### check even/odd ############### */
console.log("############### check even/odd ###############");
var number = 10;
if (number % 2 === 0) {
    console.log(number, " is even");
} else {
    console.log(number, " is odd");
}

//* ############### check prime number ############### */
console.log("############### check prime number ###############");
var number = 19;
var count = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        count++;
    }
}
console.log(count === 2 ? number + " is prime" : number + " is not prime");

//* ############### check +ve/0/-ve ############### */
console.log("############### check +ve/0/-ve ###############");
var number = -0.05;
if (number > 0) {
    console.log(number + " is +ve");
} else if (number === 0) {
    console.log(number + " is 0");
} else {
    console.log(number + " is -ve");
}

//* ############### check area of shape ############### */
console.log("############### check area of shape ###############");
var areaOfShapes = "circle";
var side1 = 5;
var side2 = 10;
var radius = 4;
switch (areaOfShapes) {
    case "rectangle": {
        console.log("area of rectangle is: ", side1 * side2);
        break;
    }
    case "circle": {
        console.log("area of circle is: ", (3.14 * radius * radius));
        break;
    }
    case "square": {
        console.log("area of square is: ", side1 * side1);
        break;
    }
    default: {
        console.log("not a shape");
        break;
    }
}

//* ############### print table of 10 ############### */
console.log("############### print table of 10 ###############");
for (let i = 1; i <= 10; i++) {
    console.log("10 * " + i + " = " + 10 * i);
}

//* ############### positive number check ############### */
var number;
console.log("############### enter a positive number check ###############");
/*
do {
    number = prompt("Enter a +ve number");
} while (number < 0 || isNaN(number))
*/

//* ############### infinite for loop ############### */
console.log("############### infinite for loop ###############");
// we can run infinite for loop by just putting double semi-colon inside for loop 
/*
for (;;) {
    console.log("infinite for loop");
}
*/

//* ############### use debugger to see for loop ############### */
console.log("############### use debugger to see for loop ###############");
/*
var sum = 0;
for (let i = 1; i <= 10; i++) {
    debugger;
    sum = sum + i;
}
console.log(sum);
*/
//* ############### find a leap year program ############### */
console.log("############### find a leap year program ###############");
var year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

//* ############### create a triangle pattern with star ############### */
//! make a matrix and put rows/columns numbers then make a logic to print stars
console.log("############### create a triangle pattern with star ###############");
var pattern = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern = pattern + "* "
    }
    console.log(pattern);
    pattern = "";
}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        if (i === j) {
            pattern = pattern + "* "
            console.log(pattern);
        }
    }
}

console.log("############### create a triangle pattern with star ###############");
pattern = "";
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern = pattern + "* "
    }
    console.log(pattern);
    pattern = "";
}

console.log("############### create a triangle pattern with star ###############");
var num = 5;
pattern = "";
for (let row = 1; row <= num; row++) {
    for (let col = num; col >= 1; col--) {
        if (row >= col) {
            pattern = pattern + "*"
        }
        else {
            pattern = pattern + " "
        }
    }
    console.log(pattern);
    pattern = "";
}

console.log("############### create a triangle pattern with star ###############");
var num = 5;
pattern = "";
for (let row = num; row >= 1; row--) {
    for (let col = num; col >= 1; col--) {
        if (row >= col) {
            pattern = pattern + "*"
        }
        else {
            pattern = pattern + " "
        }
    }
    console.log(pattern);
    pattern = "";
}