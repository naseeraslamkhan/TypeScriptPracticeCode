"use strict";
// // console.log('Hello I am here never file' );
// // function throwError(errorMsg: string): never { 
// //     throw new Error(errorMsg); 
// // } 
// // function keepProcessing(): never { 
// //     while (true) { 
// //  console.log('I always does something and never ends.')
// // }
// // }
// // keepProcessing();   
// interface Triangle {
//     kind: "triangle";
//     sideLength: number;
//   }
//   type Shape = Circle | Square | Triangle;
//   function getArea(shape: Shape) {
//     switch (shape.kind) {
//       case "circle":
//         return Math.PI * shape.radius ** 2;
//       case "square":
//         return shape.sideLength ** 2;
//       default:
//         const _exhaustiveCheck: never = shape;
//   Type 'Triangle' is not assignable to type 'never'.
//         return _exhaustiveCheck;
//     }
//   }
