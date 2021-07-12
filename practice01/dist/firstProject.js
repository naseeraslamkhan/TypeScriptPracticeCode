"use strict";
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('' + '<br>');
document.write('Hello I am here firstProject  file' + '<br>');
function ArrayMaker() {
    var dan = new Array(new Array(), new Array(), new Array(), new Array(), new Array(), new Array());
    var rowSize = 6;
    var colSize = 9;
    for (let k = 0; k < rowSize; k++) {
        for (let m = 0; m < colSize; m++) {
            dan[k][m] = k * 7 + 2;
        }
    }
    return dan;
}
function display(dan, x, y) {
    for (let k = 0; k < x; k++) {
        for (let m = 0; m < y; m++) {
            if (m == 0) {
                document.write(dan[k][m]);
            }
            else
                document.write(',' + dan[k][m]);
        }
        document.write('<br>');
    }
}
var a = ArrayMaker();
display(a, 6, 9);
