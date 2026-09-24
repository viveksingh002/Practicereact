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

// //Show/Hide Student List
// import { useState } from "react";
// import Student from "../Student";
// function Array(){
// const[value,setValue]=useState(false)
// const students = [
//   "Vivek",
//   "Rahul",
//   "Aman"
// ];
// return(
//     <div>
//         <button onClick={()=>{setValue(!value)}}>
//             {
//                 value?"Hide Students":"Show Students"
//             }
//         </button>
//         {
//             students.map((student)=>(          
//                  value?  <h1>{student}</h1>: " "
//             ))
//         }
//     </div>
// )
// }
// export default Array;

// //Q4. Search Name
// import { useState } from "react";
// function Array(){
//     const[search,setSearch]=useState("")
    

// const names=[
//  "Vivek",
//  "Rahul",
//  "Aman"
// ];
// const foundName = names.find((name) => name === search);
// return(
//     <div>
// <h1>Hello {foundName}</h1>
//         <input onChange={(e)=> setSearch(e.target.value)}
//         />
        
//     </div>
// )
// }
// export default Array;

// //Q5. Like System
// import { use, useState } from "react";
// function Array(){
// const[increase,setIncrease]=useState([0,0,0]);
// const posts=[
//  "React Tutorial",
//  "JavaScript",
//  "Node JS"
// ];
// return(
//     <div>
//         {
//             posts.map((post,index)=>(
//                 <div>
//                 <h1>{post}</h1>
//                 <h2>Like: {increase[index]}</h2>
//                 <button
//   onClick={() =>
//     setIncrease(
//       increase.map((like, i) =>
//         i === index ? like + 1 : like
//       )
//     )
//   }
// >
//   Like
// </button>

//                 </div>
                
//             ))
//         }
//     </div>
// )


// }
// export default Array;

// //Q6. Login User List
// import { useState } from "react";
// function Array(props){

// const users=[
//  {
//  name:"Vivek",
//  login:true
//  },
//  {
//  name:"Rahul",
//  login:false
//  }
// ]
// return(
//     <div>
//         {
//             users.map((user)=>(
//                 <div>
//                 <h1>{user.name}</h1> 
//                 {
//                     user.login?"online":"offline"
//                 }
//                 </div>
                
//             ))
//         }
//     </div>
// )

// }
// export default Array;


// //using props
// function User(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <p>{props.login ? "Online" : "Offline"}</p>
//     </div>
//   );
// }

// function Array() {
//   const users = [
//     {
//       name: "Vivek",
//       login: true
//     },
//     {
//       name: "Rahul",
//       login: false
//     }
//   ];

//   return (
//     <div>
//       {
//         users.map((user) => (
//         <User
//           name={user.name}
//           login={user.login}
//         />
//       ))
//       }
//     </div>
//   );
// }

// export default Array;

//Q7. Counter For Each Student
import { useState } from "react";
function Count(props){
return(
    <div>
        <h1>{props.student}</h1>
        <h2>{props.increase[props.index]}</h2>
    </div>
)
}

function Array(){
    const[increase, setIncrease]=useState([0,0,0]);
const students=[
 "Vivek",
 "Rahul",
 "Aman"
];

return(
    <div>
        {
            students.map((student,index)=>(
               <div>
               
                <Count 
                    student={student}
                    increase={increase}
                    index={index}
                />
                <button onClick={()=>setIncrease(increase.map((increaseone , i )=>(
                    index===i? increaseone+1:increaseone
                )
                ))}> +</button>
                </div>
            ))
        }
    </div>
)
}

export default Array;