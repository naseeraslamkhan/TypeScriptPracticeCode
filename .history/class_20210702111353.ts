document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here in class  file' + '<br>');

interface Calcu {
  num1: number;
  num2: number;
}

class Calculator {
  num1: number;
  num2: number;
  constructor() {
    document.write(
      '              Welcome To Our Calculator application       ' + '<br>'
    );
    document.write('You can did following functionalities: ' + '<br>');
    document.write('Add' + '<br>');
  }
  addition(numb1: number, numb2: number): number {
    this.num1 = numb1;
    this.num2 = numb2;
    return this.num1 + this.num2;
  }
}
var a: Calcu;
{
  num1: 45;
  num2: 90;
}
var x = new Calculator();
var sum = x.addition(a.num1, a.num2);
document.write('Sum of two operands is :' + sum + '<br>');
