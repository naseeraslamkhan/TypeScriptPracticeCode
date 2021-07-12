"use strict";
console.log('Hello I am here Discriminated Union file');
var customer = {
    kind: "circle",
    radius: 454,
    sideLength: undefined
};
function xi(l) {
    console.log(l.radius);
}
xi(customer);
