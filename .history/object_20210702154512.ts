interface Prop1
{
num4:number,
yd:string,
sayHi3: ()=>string

}
class Car implements Prop1
{
    num4: number;
    yd: string;
    sayHi3: () => string;
}
let k:Prop1=new Car();
let s={
    num4:number,
    //yd:string,
    sayHi3: ()=>string
    
    }
    k=s;