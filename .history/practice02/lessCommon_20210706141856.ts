console.log('Hello I am here less common primitives file' );
const oneHundred: bigint = BigInt(100);
console.log(oneHundred);
const anotherHundred: bigint = 100n;
console.log(anotherHundred);


const firstName = Symbol("name");
const secondName = Symbol("name");
var status:boolean;
function f(firstName,secondName)
{

if (firstName === secondName)
{
    status=false;
return status;
}
else status=true;
return status;
}
var k=f('naseer','naseer');
console.log(k);