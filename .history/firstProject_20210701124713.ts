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

var dan=[["naseer","aslam"],
        ["naseer","aslam"],
        ["naseer","aslam"],

        ["naseer","aslam"]
]



for(let k=0;k<4;k++)
{
for(let m=0;m<2;m++)
{
  //dan[k][m]=(k+1).toString();
  document.write(dan[k][m]+"<br>");
}
}
