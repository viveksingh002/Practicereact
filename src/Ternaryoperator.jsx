// import { useState } from "react";
// function Ternaryoperator(){
//     const[value,setvalue]=useState(true)

// return(
//     <div>
//     {
//     value ? <h1>Please login</h1>: <h1>Log out</h1>
//     }
//         <button onClick={()=>setvalue(!value)}>
//             {
//                 value?"Log in":"Log out"
//             }
//         </button>
//     </div>
// )
// }
// export default Ternaryoperator;

// import { useState } from "react";
// function Ternaryoperator(){
//     const password=12345;
//     const[value,setvalue]=useState(true)
// return(
//     <div>
//         <button onClick={()=>setvalue(!value)}>
//             {
//                 value?"hide pass":"show pass"
//             }
//         </button>
//         {
//             value?<h1>{password}</h1>:<h1></h1>
//         }
//     </div>
// )
// }
// export default Ternaryoperator;

// import { useState } from "react";
// function Ternaryoperator(){
//     const[value,setvalue]=useState("")
// return(
//     <div>
//     <h1>{value}</h1>
//         <input 
//         placeholder="Enter your age"
//         type="Number"
//         onChange={(e)=>setvalue(e.target.value)}/>
//        <h1> {
//             value===""?"Enter your age":value<18?"you cant vote":"you can vote"
//         }</h1>
//     </div>
// )
// }
// export default Ternaryoperator;

//loading fetch
// import { useState } from "react";

// function Ternaryoperator() {
//   const [value, setValue] = useState(false);
// const fetchdata = () =>{
//   setValue(true);
//   setTimeout(() => {
//   setValue(false)
// }, 2000);
// };

// return(
//   <div>
// {
//   value?<h1>data loading.....</h1>:<h1>Data loaded</h1>
// }
//     <button onClick={fetchdata}>Fetch Data</button>
//   </div>
// )
// }
// export default Ternaryoperator


//notificaton system
// import { useState } from "react";

// function Ternaryoperator() {
//   const [value, setValue] = useState(false);

// return(
//   <div>
//     <h1>{
//       value?"You have 5 new messages": "No message here" 
//     }</h1>
//     <button onClick={()=> {setValue(!value);}}> Check Messages</button>
//   </div>
// )

// }
// export default Ternaryoperator

//Profile Card (Medium)

// import { useState } from "react";

// function Ternaryoperator() {
//   const [showProfile,setShowProfile] = useState(false)

// return(
//   <div>
//   {showProfile && (
//         <div>
//           <h2>Name: Vivek</h2>
//           <h2>Course: CSE</h2>
//           <h2>College: ABC</h2>
//         </div>
//       )}
//     <button onClick={()=>setShowProfile(!showProfile)}>
//       {
//         showProfile?"hide profile":"Show profilee"
//       }
//     </button>
//   </div>
// )

// }
// export default Ternaryoperator






import { useState } from "react";

function Ternaryoperator() {
  const [role,setRole] = useState("user")
return(
  <div>
 
    {
      role=="admin"?<h1>Admin Dashboard</h1>:role=="user"?<h1>User Dashboard</h1>:role=="guest"?<h1>Please Login</h1>:null
    }
  
    <button onClick={() => setRole("admin")}>Admin</button>
<button onClick={() => setRole("user")}>User</button>
<button onClick={() => setRole("guest")}>Guest</button>

  </div>
)
}
export default Ternaryoperator