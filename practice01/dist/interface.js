"use strict";
let myFunction = (L) => {
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('' + '<br>');
    console.log('Hello I am here Interface file' + '<br>');
    for (let x = 0; x <= 5; x++) {
        console.log('Now value of x is : ' + x + '<br>');
    }
    let arr = ['MNA', '420'];
    console.log(arr[1]);
    console.log('<br>' + L.num1);
    console.log('<br>' + L.y);
    console.log('<br>' + L.sayHi);
};
myFunction({ num1: 45, y: "Muhammad Naseer Aslam", sayHi: () => { return "Hi there"; } });
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: () => { return "Hi there"; }
};
console.log('<br>' + "Customer Object ");
console.log('<br>' + customer.firstName);
console.log('<br>' + customer.lastName);
console.log('<br>' + customer.sayHi());
