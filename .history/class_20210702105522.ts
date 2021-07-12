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
   add(number1,number2):number
  {
   return (number1+number2);
  }
}

var x =new Calculator();
var a:Calcu
{
num1:45.89,
num2:90
}
var sum=x.add(a.num1,a.num2);
document.write("Sum of two operands is :" +sum+"<br>");
