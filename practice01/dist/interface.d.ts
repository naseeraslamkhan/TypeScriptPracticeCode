interface Prop {
    num1: number;
    y: string;
    sayHi: () => string;
}
interface Prop1 {
    num4: number;
    yd: string;
    sayHi3: () => string;
}
interface IPerson extends Prop, Prop1 {
    firstName: string;
    lastName: string;
    sayHi: () => string;
}
declare let myFunction: any;
declare var customer: IPerson;
