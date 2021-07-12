'use strict';

import { Variables } from "./type";



document.write('Hello I am here basic file' );
const adsvw: number[] = [1, 1, 1, 2, 2, 435, 4, 768, 54357743, 23, 478, 4243];


const user = {
  name: 'Daniel',
  age: 26,
  location: 'Lahore',
};
document.write(user.location);

type x = string | number;
const number1:x= 'naseer';
document.write( number1);


function greet(person:any, date:Date) {
   document.write(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  greet("Maddison", new Date());
  document.write(` ${user.location},is most beautiful city of pakistan`);
 
  function log({name,value1,value2}: Variables):void
  {

    document.write(`My name is:  ${name} and I am going to sum ${value1}+${value2} =`,value1+value2);
    
  }
  
 
 
  let ki=
  {
  name:"naseer",
  value1:78,
  value2:46
  }
  log(ki);
  
