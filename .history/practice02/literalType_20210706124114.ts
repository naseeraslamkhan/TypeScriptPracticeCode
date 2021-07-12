console.log('Hello I am here literal type file');
function printTextA(s: string, alignment: "left" | "right" | "center"):void {
    console.log("Here I am in printText Fun ction");
    console.log("Here is string " +s);
    console.log("Here is alignment   " + alignment)
  }
  printTextA("Hello, world", "left");
  printTextA("G'day, mate", "centre");