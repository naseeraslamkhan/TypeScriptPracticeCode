interface Calcu {
    num1: number;
    num2: number;
}
interface Calcu2 {
    num1: number;
    num2: number;
}
declare class Calculator implements Calcu, Calcu2 {
    numberOne: number | undefined;
    nummber2: number | undefined;
    constructor();
    num1: number | undefined;
    num2: number | undefined;
    addition(L: Calcu): number;
}
declare var a: Calcu;
declare var x: Calculator;
declare var sum: number;
