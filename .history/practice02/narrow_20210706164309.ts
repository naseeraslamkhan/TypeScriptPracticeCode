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
  
  
  //In operaor 
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  
  function move(animal: Fish | Bird) {
    if ("swim" in animal) {
      return animal.swim();
    }
  
    return animal.fly();
  }
  //Equality
function printAll(strs: string | string [] | null) {
    if (strs !== null) {
      if (typeof strs === "object") {
        for (const s of strs) {
                         
  (parameter) strs: string[]
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
                     
  (parameter) strs: string
      }
    }
  }
  
  // Truthness
  function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
  
// TypeOf guard
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) {
  Object is possibly 'null'.
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }
  
  //Basic narrow
  function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
  }
  var x=padLeft(35,"naseer");
  console.log(x)