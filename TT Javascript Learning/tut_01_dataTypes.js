var myNumber = 100; //dataType is number
console.log(myNumber); //100
console.log(typeof (myNumber)); //number

var myString = "100"; //dataType is string
console.log(myString); //100
console.log(typeof (myString)); //string

var myArray = [100, 200, 300]; //dataType is array
console.log(myArray); //[100, 200, 300]
console.log(typeof (myArray)); //object

var myBoolean = true; //dataType is boolean
console.log(myBoolean); //true
console.log(typeof (myBoolean)); //boolean

var myNull = null; //dataType is null
console.log(myNull); //null
console.log(typeof (myNull)); //object

var myUndefined = undefined; //dataType is undefined
console.log(myUndefined); //undefined
console.log(typeof (myUndefined)); //undefined

var myObject = {}; //dataType is object
console.log(myObject); //{}
console.log(typeof (myObject)); //object

var myDate = new Date(); //dataType is date
console.log(myDate); //date and time
console.log(typeof (myDate)); //object

var myFunction = function () { }; //dataType is function
console.log(myFunction); //f(){}
console.log(typeof (myFunction)); //function

/* ############### Note ############### */
/*
Q--->>> how to convert number into string and string into number ???
A--->>> number ko string me convert karnay k liye sirf number k baad +"" likhay matlab plus and double quotes or is tarah numner string me convert ho jata hy and string se number me convert karnay k liye string se pehlay + likh dain to b number ban jata hay, nechay example daikhay 
*/
var minNumber = 50; //number
var maxNumber = "100"; //string

console.log(minNumber + maxNumber); //50100

console.log(typeof (minNumber + "")); //become string
console.log(typeof (String(minNumber))); //become string using string constructor

console.log(typeof (+maxNumber)); //become number
console.log(typeof (Number(maxNumber))); //become number using number constructor

/* ############### Note ############### */
/*
Q--->>> what are truthy ???
A--->>> truthy values are:
1: true
2: any non-empty string ("hello")
3: any empty/non-empty array []/[1, 2, 3]
4: any empty/non-empty object {}/{a: 1, b: 2, c: 3}
5: any non-zero number (100)
*/

if (true) {
    console.log(true);
}

if ("hello") {
    console.log(true);
}

if ([]) {
    console.log(true);
}
if ([1, 2, 3]) {
    console.log(true);
}

if ({}) {
    console.log(true);
}

if ({ a: 1, b: 2, c: 3 }) {
    console.log(true);
}

if (100) {
    console.log(true);
}

/* ############### Note ############### */
/* if block only runs when its true
Q--->>> what are falsy values ???
A--->>> falsy values are:
1: false
2: empty string ("")
3: zero number (0)
4: NaN
5: undefined
6: null
*/

{
    if (false) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
{

    if ("") {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
{

    if (0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
{

    if (NaN) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
{

    if (undefined) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
{

    if (null) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

