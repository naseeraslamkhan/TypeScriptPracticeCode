import SLogin from './module.js';
import TLogin from './module1.js';

let m= new SLogin();
alert("Here is Student LOgin Data"+m.data);

let k= new TLogin();
alert("Here is Teacher LOgin Data"+k.data);
console.log("Here is Student LOgin Data"+k.data);