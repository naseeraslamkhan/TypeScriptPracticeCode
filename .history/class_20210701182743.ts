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
    document.write('Subtract' + '<br>');
    document.write('Multiplication' + '<br>');
    document.write('Division' + '<br>');
    document.write('Modulous' + '<br>');
    document.write('Log Of value by base 10' + '<br>');
  }
  add(L:Calcu ):number
  {
   return this.num1+this.num2;
  }
}
var x=new Calculator();
x.add(67,89);
