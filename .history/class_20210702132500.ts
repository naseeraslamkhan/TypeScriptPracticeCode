document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here in class  file' + '<br>');

interface Calcu {
  num1: number
  num2: number
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
  
  public addition(numb1: number, numb2: number): number 
   {
    this.numberOne = numb1;
    this.nummber2 = numb2;
    var d=this.numberOne + this.nummber2;
    return d;
  }
}

var a: Calcu;
{
  num1: 45,
  num2: 90
}
var x = new Calculator();
var sum =x.addition(a.num1,a.);
document.write('Sum of two operands is :' + sum + '<br>');
