document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here in class  file' + '<br>');

interface Calcu {
  num1: number=454,
  num2: number=436
}

class Calculator {
  numberOne:number | undefined;
  nummber2: number | undefined;
  constructor() 
  {
    document.write(
      '              Welcome To Our Calculator application       ' + '<br>'
    );
    document.write('You can did following functionalities: ' + '<br>');
    document.write('Add' + '<br>');
  }
  
  addition(num): number 
   {
   
   
    this.numberOne = L.num1;
    this.nummber2 =L.num2;
    var d=this.numberOne + this.nummber2;
    return d;
  }
}

var x = new Calculator();
var sum =x.addition(67.77,577.966);
document.write('Sum of two operands is :' + sum + '<br>');
