interface Prop {
    num1: number;
    y: string;
    sayHi: () => string;
}
interface Prop {
    num4: number;
    yd: string;
    sayHi3: () => string;
}
var x=new Prop();
x.yd="naseertr";
interface IPerson extends Prop {
    firstName: string;
    lastName: string;
    sayHi: () => string;
}
declare let myFunction: any;
declare var customer: IPerson;
