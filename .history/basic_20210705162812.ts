'use strict';
import {Variables} from './type.ts';

document.write('Hello I am here basic file' + '<br>');
const adsvw: number[] = [1, 1, 1, 2, 2, 435, 4, 768, 54357743, 23, 478, 4243];
//adsvw();

const user = {
  name: 'Daniel',
  age: 26,
  location: 'Lahore',
};
document.write('<br>'+user.location);

type x = string | number;
const number1:x= 'naseer';
document.write('<br>' + number1);
console.log('<br>'+ number1);

function greet(person, date) {
   document.write(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  greet("Maddison", new Date());
  document.write(`<br> ${user.location},is most beautiful city of pakistan`);
  function sendDataToServer(someArg)
  {
  document.write("I am MNA");
  }
  function log(someArg) {
    sendDataToServer(someArg);
  }
  
  // What arg is valid and what isn't?
  document.write("<br>")
  log(123);
  document.write("<br>")
  log('hello world');
 