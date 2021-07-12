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
alert("Here is Student LOgin Data"+m.data);

let k= new TLogin();
alert("<br>"+"Here is Student LOgin Data"+k.data);
console.log("Here is Student LOgin Data"+k.data);