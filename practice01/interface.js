"use strict";
var myFunction = function (L) {
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('Hello I am here Interface file' + '<br>');
    for (var x_1 = 0; x_1 <= 5; x_1++) {
        console.log('Now value of x is : ' + x_1 + '<br>');
    }
    var arr = ['MNA', '420'];
    console.log(arr[1]);
    console.log('<br>' + L.num1);
    console.log('<br>' + L.y);
    console.log('<br>' + L.sayHi);
};
myFunction({ num1: 45, y: "Muhammad Naseer Aslam", sayHi: function () { return "Hi there"; } });
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log('<br>' + "Customer Object ");
console.log('<br>' + customer.firstName);
console.log('<br>' + customer.lastName);
console.log('<br>' + customer.sayHi());
