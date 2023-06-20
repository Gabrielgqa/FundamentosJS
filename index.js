// Q1 - What is Functions Declarations?

function square(num) {
    return num * num;
}

// Q2 - What is Functions Expression?

const square = function (num) {
    return num * num;
}

// Q3 - What are First Class Functions?

function square(num) {
    return num * num;
}

function displaySquare(fn) {
    console.log("Square is "+ fn(5));
}

displaySquare(square);

// Q4 - What is IIFE (Immediately Invoked Function Expression)

(function square(num) {
    console.log(num * num);
})(5);

// Closures: A function that is inside another function with access to the variables and parameters of the enclosing function.

(function (x) {
    return (function (y){
        console.log(x);
    })(2)
})(5);

// Q5 - Hoisting in Functions

printSomething(); // this works

function printSomething(){
    console.log(printSomething);
}

// Q6 - Params vs Arguments

function square(num) { // Params
    return num * num;
}

square(2); // Arguments

// Q7 - Spread operators vs Rest operators

function multiply(...nums) {
    console.log(nums[0] * nums[1]); // Rest operators
}

var arr = [5, 6];
multiply(...arr); // Spread operators