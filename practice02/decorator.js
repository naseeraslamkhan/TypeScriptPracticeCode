"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log("Hello I am here decorator file");
function helper(constructor) {
    console.log("Mera bhai sb ki help krta bina kisi grz k");
    console.log("Constructor of Sohaib class is :   ", constructor);
}
var Sohaib = /** @class */ (function () {
    function Sohaib() {
        this.name = "Meesna420";
        this.rollNo = "Prrosi of his crush";
        console.log("By defualt chaalaak loomri");
    }
    Sohaib = __decorate([
        helper,
        __metadata("design:paramtypes", [])
    ], Sohaib);
    return Sohaib;
}());
// const bhai=new Sohaib();
// console.log(bhai);
