function ArrayMaker():number[]|string[]{
   var dan:number[]|string[]= new Array(
    new Array(),
    new Array(),
    new Array(),
    new Array(),
    new Array(),
    new Array()
  );
  var rowSize: number = 6;
  var colSize: number = 9;

  for (let k = 0; k < rowSize; k++) {
    for (let m = 0; m < colSize; m++) {
      dan[k][m] = k*7+2;
    }
    
  }
  return dan;
}
function display(dan:any,x:number,y:number): void {
  for (let k = 0; k <x; k++) {
    for (let m = 0; m <y; m++) {
      if (m == 0) {
        document.write(dan[k][m]);
      } else document.write(',' + dan[k][m]);
    }
    document.write('<br>');
  }
}
var a=ArrayMaker();
display(a,6,9);




