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
*/
var dan = new Array(new Array(), new Array());
var rowSize: number = 6;
var colSize: number = 9;

for (let k = 0; k <rowSize; k++) 
{
  for (let m = 0; m < colSize; m++) 
  {
    dan[k][m] = k+1;
   
    if(m==0)
    {
    document.write(dan[k][m]);
    }
    else
    document.write(","+dan[k][m]);
  }
 document.write("<br>");
}
