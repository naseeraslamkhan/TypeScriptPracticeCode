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
  addition(num1: number, num2: number) {
    return num1+num2;
  }
  num1: number;
  num2: number;
  constructor() {
    document.write(
      '              Welcome To Our Calculator application       ' + '<br>'
    );
    document.write('You can did following functionalities: ' + '<br>');
    document.write('Add' + '<br>');
  
}

var x =new Calculator();
var a:Calcu
{
num1:45.89,
num2:90
}
var sum=x.addition(a.num1,a.num2);
document.write("Sum of two operands is :" +sum+"<br>");
/*
//
class Car { 
  //field 
  engine:string; 
  
  //constructor 
  constructor(engine:string) { 
     this.engine = engine 
  }  
  
  //function 
  disp():void { 
    document.write("Function displays Engine is  :   "+this.engine) ;
  } 
} 

//create an object 
var obj = new Car("XXSY1")

//access the field 
document.write("Reading attribute value Engine as :  "+obj.engine) ; 

//access the function
obj.disp()

function addition(number1: any, number2: any) {
  throw new Error("Function not implemented.");
}
*/