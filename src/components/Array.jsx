// function Array(){
// const fruits = ["Apple", "Mango", "Banana"];
// return(
//     <div>
//             <h1>{fruits[0]}</h1>
//            <h2>{fruits[2]}</h2> 
//            <h2>This is the array length {fruits.length}</h2> 
//     </div>
// )
// }
// export default Array;

//using loop show array

// function Array(){
// const students = ["Vivek", "Rahul", "Aman", "Rohit"];
// return(
//     <div>
//             {
//                 students.map((student)=>(
//                     <h1>{student}</h1>
//                 ))
//             }
//     </div>
// )
// }
// export default Array;

//Student List (Array + map + Component

// function Array(){
// const studentlist = ["Vivek", "Rahul", "Aman", "Rohit"];
// return(
//     <div>
//             {
//                 studentlist.map((student)=>(
//                     <h1>Student: {student}</h1>
//                 ))
//             }
//     </div>
// )
// }
// export default Array;


// //Product Card (Array + Props)
// function Array(props){
// const products = [
//  {
//   name:"iPhone",
//   price:70000
//  },
//  {
//   name:"Laptop",
//   price:50000
//  },
//  {
//   name:"Watch",
//   price:5000
//  }
// ];
// return(
//     <div>
//         {
//             products.map((productname)=>(
//                 <div>
//                 <h1>{productname.name}</h1>
//                 <h2>Price: {productname.price}</h2>
//                 </div>
//             ))
//         }
//     </div>
// )
// }
// export default Array;

//Show/Hide Student List
import { useState } from "react";
import Student from "../Student";
function Array(){
const[value,setValue]=useState(false)
const students = [
  "Vivek",
  "Rahul",
  "Aman"
];
return(
    <div>
        <button onClick={()=>{setValue(!value)}}>
            {
                value?"Hide Students":"Show Students"
            }
        </button>
        {
            students.map((student)=>(
                
                 value?  <h1>{student}</h1>: " "
                
               
            ))
        }
    </div>
)
}
export default Array;