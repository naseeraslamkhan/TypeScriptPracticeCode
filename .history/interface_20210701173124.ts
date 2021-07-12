interface Prop
{
num1:number,
y:string,
sayHi: ()=>string 

}
let myFunction: any = (L: Prop): void => {
  document.write('Hello I am here MNA' + '<br>');
  for (let x = 0; x <= 5; x++) {
    document.write('Now value of x is : ' + x + '<br>');
  }
  let arr: string[] = ['MNA', '420'];
  document.write(arr[1]);
  document.write('<br>' + L.num1);
};
myFunction({num1: 45,y:"Muhammad Naseer Aslam");
