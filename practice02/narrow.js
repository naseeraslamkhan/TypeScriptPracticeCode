"use strict";
//Instance of
console.log('Hello I am here narrow file');
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        //          ^?
    }
    else {
        console.log(x.toUpperCase());
        //          ^?
    }
}
logValue("Tue Jul 06 2021 16:32:52 GMT+0500 (Pakistan Standard Time");
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
//Equality
// Truthness
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s_1 = strs_1[_i];
            console.log(s_1);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
// TypeOf guard
function printAll(strs) {
    if (typeof strs === "object") {
        for (var _i = 0, strs_2 = strs; _i < strs_2.length; _i++) {
            var s_2 = strs_2[_i];
            //Object is possibly 'null'.
            console.log(s_2);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
//Basic narrow
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
var x = padLeft(35, "naseer");
console.log(x);
