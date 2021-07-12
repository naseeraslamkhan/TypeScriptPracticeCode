document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here in class  file' + '<br>');

interface Calcu {
  numberOne: number
  nummber2: number
}

class Calculator implements Calcu {
  constructor() {
    document.write(
      '              Welcome To Our Calculator application       ' + '<br>'
    );
    document.write('You can did following functionalities: ' + '<br>');
    document.write('Add' + '<br>');
  }
  addition(num1,num2): number {
    this.numberOne = num1;
    this.nummber2 = num2;
    var d = this.numberOne + this.nummber2;
    return d;
  }
}

var x = new Calculator();
var sum = x.addition(3243,46);
document.write('Sum of two operands is :' + sum + '<br>');
