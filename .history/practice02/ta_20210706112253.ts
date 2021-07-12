// console.log('' + '<br>');
// console.log('' + '<br>');
// console.log('' + '<br>');
// console.log('' + '<br>');
// console.log('' + '<br>');
// console.log('' + '<br>');
// console.log('' + '<br>');
console.log('Hello I am here type assertion file' + '<br>');
interface Employee { 
    name: string; 
    code: number; 
} 

let employee = <Employee> { }; 
employee.name = "John"; // OK
employee.code = 123;
console.log("<br>"+employee.code);