import SLogin from './module.js';
import TLogin from './module1.js';
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here Module  file' + '<br>');

let m= new SLogin();
console.log("Here is Student LOgin Data"+m.data);
document.write("Here is Student LOgin Data"+m.data);
let k= new TLogin();
document.write("<br>"+"Here is Student LOgin Data"+k.data);
console.log("Here is Student LOgin Data"+k.data);