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
    for (var k_1 = 0; k_1 < rowSize; k_1++) {
        for (var m = 0; m < colSize; m++) {
            dan[k_1][m] = k_1 * 7 + 2;
        }
    }
    return dan;
}
function display(dan, x, y) {
    for (var k_2 = 0; k_2 < x; k_2++) {
        for (var m = 0; m < y; m++) {
            if (m == 0) {
                document.write(dan[k_2][m]);
            }
            else
                document.write(',' + dan[k_2][m]);
        }
        document.write('<br>');
    }
}
var a = ArrayMaker();
display(a, 6, 9);
