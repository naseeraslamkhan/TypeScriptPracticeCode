/*interface Prop
{
z:number,
y:string,
z1(num),

}
let myFunction: any = (L: Prop): void => {
  document.write('Hello I am here' + '<br>');
  for (let x = 0; x <= 5; x++) {
    document.write('Now value of x is : ' + x + '<br>');
  }
  let arr: string[] = ['MNA', '420'];
  document.write(arr[1]);
  document.write('<br>' + L.z);
};
myFunction({z: 45});

function Array(): string[] {
  var dan = new Array(
    new Array(),
    new Array(),
    new Array(),
    new Array(),
    new Array(),
    new Array()
  );
  var rowSize: number = 6;
  var colSize: number = 9;

  for (let k = 0; k < rowSize; k++) {
    for (let m = 0; m < colSize; m++) {
      dan[k][m] = k*7+1;
    }
    
  }
  return dan[[]]
}*/
function MakeArray(elemSize,init){
  if(elemSize.length === 0)
      return init;

  var result = [];
  var otherSize = elemSize.slice(1);
  var otherArray = MakeArray(otherSize,init); 
  for(var i = 0; i < elemSize[0]; ++i){
      result.push(otherArray);
  }
  return result;
}


function display(dan): void {
  for (let k = 0; k < dan.length; k++) {
    for (let m = 0; m < dan.length[k]; m++) {
      if (m == 0) {
        document.write(dan[k][m]);
      } else document.write(',' + dan[k][m]);
    }
    document.write('<br>');
  }
}
var a = MakeArray([5,5,5],2)
display(a);