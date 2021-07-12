console.log('Hello I am here Function file' );
//let salamSahab:<T,T1>(a:T,b:T1)=>void;
function salamSahab<T,T1>(name:T,count:T1)=>
{
console.log("My name is: "+name);
console.log("My age is: "+count);
}
salamSahab<string,number>("Naseer Aslam",23);

