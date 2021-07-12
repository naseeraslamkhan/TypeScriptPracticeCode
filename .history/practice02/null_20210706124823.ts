console.log('Hello I am here null file' );
function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }
  var x=doSomething("naseeR");
  console.log(x);
  
  
// Both null and undefined are only `==` to themselves and each other:
console.log("null == null  answere is   :," + null == null); // true (of course)
console.log("undefined == undefined  answere is   :," + undefined == undefined); // true (of course)
console.log("null == undefined  answere is     :," + null == undefined); // true


// You don't have to worry about falsy values making through this check
console.log("0 == undefined  answere is    :,"  + 0 == undefined); // false
console.log("'' == undefined  answere is    :," + '' == undefined); // false
console.log("false == undefined  answere is    :," + false == undefined); // false
  
  
//   Something hasn't been initialized : undefined.
//   Something is currently unavailable: null.