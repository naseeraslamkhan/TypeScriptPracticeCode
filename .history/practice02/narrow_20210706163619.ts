//Instance of

console.log('Hello I am here narrow file' );
function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
      //          ^?
    } else {
      console.log(x.toUpperCase());
      //          ^?
    }
  }
  logValue("Tue Jul 06 2021 16:32:52 GMT+0500 (Pakistan Standard Time");