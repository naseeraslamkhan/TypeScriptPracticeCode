interface Prop
{
x:number,
y:string
}
let myFunction:any =(L:Prop)=>
{
document.write("Hello I am here"+"<br>");
for(let x=0;x<=5;x++)
{
document.write("Now value of x is : "+L.x+"<br>");
}
let arr: string[]=["MNA","420"]
document.write(arr[1]);
document.write("<br>"+L.x);

}
myFunction({x:45});