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
  
  function xi(l:Shape)
  {
    console.log(l.radius);
  }
  xi(customer);