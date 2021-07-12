import SLogin from './module';
import TLogin from './module1';
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here Module  file' + '<br>');

let m= new SLogin();
document.write("Here is Student LOgin Data"+m.data);
let k= new TLogin();
document.write("<br>"+"Here is Student LOgin Data"+k.data);
console.log("Here is Student LOgin Data"+k.data);