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
  type Human = {  swim?: () => void, fly?: () => void };
  
  function move(animal: Fish | Bird | Human) {
    if ("swim" in animal) { 
      animal
  
    } else {
      animal
  
    }
  }
  
  
  //Equality
  function printAll(strs: string | string[] | null) {
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