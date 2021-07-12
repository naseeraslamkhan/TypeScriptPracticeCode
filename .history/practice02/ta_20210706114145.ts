document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here type assertion file');
interface Employee { 
    name: string; 
    code: number; 
} 

let employee = <Employee> { }; 
employee.name = "John"; // OK
employee.code = 123;
document.write(employee.code);