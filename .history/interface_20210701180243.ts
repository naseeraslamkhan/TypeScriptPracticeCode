interface Prop
{
num1:number,
y:string,
sayHi: ()=>string

}
interface namelist { 
    [index:number]:string 
 } 
 
 var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
 interface ages { 
    [index:string]:number 
 } 
 
 var agelist:ages; 
 agelist["John"] = 15   // Ok 
 agelist[2] = "nine"   // Error
 
 
 
interface Prop1
{
num4:number,
yd:string,
sayHi3: ()=>string

}
interface IPerson extends  Prop,Prop1  { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
let myFunction: any = (L: IPerson): void => {
    document.write('' + '<br>');
    document.write('' + '<br>');
    document.write('' + '<br>');
    document.write('' + '<br>');
    document.write('' + '<br>');interface namelist { 
        [index:number]:string 
     } 
     
     var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
     interface ages { 
        [index:string]:number 
     } 
     
     var agelist:ages; 
     agelist["John"] = 15   // Ok 
     agelist[2] = "nine"   // Error
};
myFunction({num1: 45,y:"Muhammad Naseer Aslam",sayHi:():string =>{return "Hi there"} );

 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 document.write('<br>'+"Customer Object ") ;
 document.write('<br>'+customer.firstName) ;
 document.write('<br>'+customer.lastName) ;
 document.write('<br>'+customer.sayHi()) ;