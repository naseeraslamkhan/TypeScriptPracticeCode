interface Employee { 
    name: string; 
    code: number; 
} 

let employee = <Employee> { }; 
employee.name = "John"; // OK
employee.code = 123;