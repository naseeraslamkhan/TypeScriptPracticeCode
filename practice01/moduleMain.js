import SLogin from './module.js';
import TLogin from './module1.js';
var m = new SLogin();
alert("Here is Student LOgin Data" + m.data + m.MNA());
var k = new TLogin();
alert("Here is Teacher LOgin Data" + k.data);
console.log("Here is Student LOgin Data" + k.data);
