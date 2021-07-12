"use strict";
console.log('Hello I am here less common primitives file');
var oneHundred = BigInt(100);
console.log(oneHundred);
var anotherHundred = 100n;
console.log(anotherHundred);
var firstName = Symbol("name");
var secondName = Symbol("name");
var status;
function f(firstName, secondName) {
    if (firstName === secondName) {
        status = false;
        return status;
    }
    else
        status = true;
    return status;
}
var k = f(firstName, secondName);
console.log(k);
