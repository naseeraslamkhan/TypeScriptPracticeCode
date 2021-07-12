console.log('Hello I am here Discriminated Union file' );
interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
  }
   
   var customer:Shape = { 
      kind:"circle",
      radius:454, 
       sideLength:undefined
       
   } 
  
  function x(l:Shape)
  {
    console.log(l.radius);
  }
  x(customer);