"use strict";
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here in class  file' + '<br>');
class Calculator {
    constructor() {
        document.write('              Welcome To Our Calculator application       ' + '<br>');
        document.write('You can did following functionalities: ' + '<br>');
        document.write('Add' + '<br>');
    }
    addition(L) {
        this.numberOne = L.num1;
        this.nummber2 = L.num2;
        var d = this.numberOne + this.nummber2;
        return d;
    }
}
var a = {
    num1: 899,
    num2: 190,
};
var x = new Calculator();
var sum = x.addition(a);
document.write('Sum of two operands is :' + sum + '<br>');
