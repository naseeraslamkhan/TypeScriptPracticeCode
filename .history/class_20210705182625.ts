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
interface Calcu2{
  num1: number;
  num2: number;
}


class Calculator implements Calcu,Calcu2{
  numberOne: number | undefined;let code: any = 123; 
  let employeeCode = <number> code; 
  console.log(typeof(employeeCode)); //Output: number
  }
}

var a: Calcu = {
  num1: 899,
  num2: 190,
};
var x = new Calculator();
var sum = x.addition(a);
document.write('Sum of two operands is :' + sum + '<br>');
