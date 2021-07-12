document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here in class  file' + '<br>');
class Car { 
    //field 
    engine:string; 
    
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
    
    //function 
    disp():void { 
       console.log("Function displays Engine is  :   "+this.engine) 
    } 
 } 
 
 //create an object 
 var obj = new Car("XXSY1")
 
 //access the field 
 console.log("Reading attribute value Engine as :  "+obj.engine)  
 
 //access the function
 obj.disp()
/*
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
   return L.num1+L.num2;
  }
}
var x=new Calculator();
var a=x.add(67,89);
document.write("Sum of two operands is :" +a+"<br>");
*/