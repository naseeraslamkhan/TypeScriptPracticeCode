console.log('Hello I am here null file' );
function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }
  var x=doSomething(null);
  console.log(x);