'use strict';

import { Variables } from "./type";



console.log('Hello I am here basic file' );
const adsvw: number[] = [1, 1, 1, 2, 2, 435, 4, 768, 54357743, 23, 478, 4243];
//adsvw();

const user = {
  name: 'Daniel',
  age: 26,
  location: 'Lahore',
};
console.log(user.location);

type x = string | number;
const number1:x= 'naseer';
console.log( number1);


function greet(person:any, date:Date) {
   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  greet("Maddison", new Date());
  console.log(` ${user.location},is most beautiful city of pakistan`);
 
  function log({name,value1,value2}: Variables):void
  {

    console.log(`My name is:  ${name} and I am going to sum ${value1}+${value2} ={${value1}+ ${value2}})`);
    
  }
  
  // What arg is valid and what isn't?
 
  let ki=
  {
  name:"naseer",
  value1:78,
  value2:46
  }
  log(ki);
  
