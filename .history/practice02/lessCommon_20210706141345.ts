console.log('Hello I am here less common primitives file' );
const oneHundred: bigint = BigInt(100);
console.log(oneHundred);
const anotherHundred: bigint = 100n;
console.log(anotherHundred);


const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName)
{
//This condition will always return 'false' since the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // Can't ever happen
}