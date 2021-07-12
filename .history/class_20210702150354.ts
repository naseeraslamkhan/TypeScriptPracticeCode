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
  numberOne: number | undefined;
  nummber2: number | undefined;
  constructor() {
    document.write(
      '              Welcome To Our Calculator application       ' + '<br>'
    );
    document.write('You can did following functionalities: ' + '<br>');
    document.write('Add' + '<br>');
  }

  addition(L: Calcu): number {
    this.numberOne = L.num1;
    this.nummber2 = L.num2;
    var d = this.numberOne + this.nummber2;
    return d;
  }
}

var a: Calcu = {
  num1: 899,
  num2: 190,
};
var x = new Calculator();
var sum = x.addition(a);
document.write('Sum of two operands is :' + sum + '<br>');
