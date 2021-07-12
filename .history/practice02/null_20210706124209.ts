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
  
  
  
  
  
//   Something hasn't been initialized : undefined.
//   Something is currently unavailable: null.