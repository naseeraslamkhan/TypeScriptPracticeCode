interface Prop
{
num1:number,
y:string,
sayHi: ()=>string 

}
let myFunction: any = (L: Prop): void => {
  document.write('Hello I am here Interface' + '<br>');
  for (let x = 0; x <= 5; x++) {
    document.write('Now value of x is : ' + x + '<br>');
  }
  let arr: string[] = ['MNA', '420'];
  document.write(arr[1]);
  document.write('<br>' + L.num1);
  document.write('<br>' + L.y);
  document.write('<br>' + L.sayHi);
};
myFunction({num1: 45,y:"Muhammad Naseer Aslam",sayHi:():string =>{return "Hi there"} );
