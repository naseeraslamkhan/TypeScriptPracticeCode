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
var dan =new Array(new Array(),new Array());

for (let k = 0; k <= 3; k++) {
  for (let m = 0; m < 2; m++) {
      if (m == 0) {
          document.write(dan[k][m]);
      } else
          document.write("," + dan[k][m]);

  }
  document.write('<br>');
}