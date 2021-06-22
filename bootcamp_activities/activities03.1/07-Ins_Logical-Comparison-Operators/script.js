var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b); //110
console.log(a - b); // 90
console.log(a / b); // 10
console.log(a * b); // 1000

// Modulus returns the remainder between two numbers.  
console.log(a % b); // 0

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality

console.log(b == c); // true ONLY LOOKING AT VALUE
console.log(b != c); // false ONLY LOOKING AT VALUE

// Compares equality and type (strict equality)
console.log(b === c); //false DIFFERENT TYPES
console.log(b !== c); //true DIFFERENT TYPES


// var a = 100;
// var b = 10;
// var c = "10";

// Greater than or less than
console.log(a > b); // true
console.log(a < b); // false

// Greater than or equal to and less than or equal to
console.log(a <= b); // false
console.log(a >= b); // true

// Logical operators take in two or more expressions and return true or false 
var expression1 = (b == c); // true
var expression2 = (a > b); // true

// Evaluates to true if expression1 AND expression2 are both true, otherwise false

console.log(expression1 && expression2); // true

// Evaluates to true if expression1 OR expression2 is true, otherwise false

console.log(expression1 || expression2); // true 

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(expression2); //true

// Returns false
console.log(!expression2 || (!expression1 || expression2)); //true

console.log(1 + (5 * 7));

