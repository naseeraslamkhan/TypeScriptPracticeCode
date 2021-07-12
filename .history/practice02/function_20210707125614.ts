console.log('Hello I am here Function file' );
//let salamSahab:<T,T1>(a:T,b:T1)=>void;
const salamSahab = <T,T1,T2>(name:T,count:T1):T2=>
{
console.log("My name is: "+name);
console.log("My age is: "+count);
}
salamSahab<string,number,void>("Naseer Aslam",23);

