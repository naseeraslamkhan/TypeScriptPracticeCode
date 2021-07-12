/*interface Prop
{
z:number,
y:string,
z1(num),

}
let myFunction: any = (L: Prop): void => {
  document.write('Hello I am here' + '<br>');
  for (let x = 0; x <= 5; x++) {
    document.write('Now value of x is : ' + x + '<br>');
  }
  let arr: string[] = ['MNA', '420'];
  document.write(arr[1]);
  document.write('<br>' + L.z);
};
myFunction({z: 45});

function ArrayMaker():number[]{
   var dan:number[]= new Array(
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
*/
var tup=[12,"67676","a xwscwc",true];
for(let k=0;k<tup.length;k++)
{
document.write(tup[k]+"<br>");

}
var x=tup.slice(2);
for(let k=0;k<x;k++)
{
document.write(x[k]+"<br>");

}