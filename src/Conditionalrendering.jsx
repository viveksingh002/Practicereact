// import { useState } from "react";
 function Conditionalrendering() {


const isAdmin = true;


return(
<div>

{
isAdmin && <h1>Admin Panel</h1>
}

</div>
)



 }
 export default Conditionalrendering

// tenrnary operator
// import { useState } from "react";
//  function Conditionalrendering() {
// const[value,setValue]=useState(false);

// return(
//     <div>
//         {
//             value ? <h1>login</h1> : <h1>Please login</h1>
//         }
//         {
//         value ? <button onClick={()=>setValue(false)}>Logout</button> : <button onClick={()=>setValue(true)}>Login</button>
//         }
//     </div>
// )


//  }

// export default Conditionalrendering;










// If- else condition
// function Conditionalrendering() {

//   const [value, setValue] = useState(false);

//   function log() {
//     return (
//       <div>
//         <button onClick={() => setValue(true)}>Log in</button>
//       </div>
//     );
//   }

//   if (value) {
//     return (
//       <div>
//         <h1>Dashboard</h1>
//         <button onClick={() => setValue(false)}>Logout</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Please login</h1>
//         {log()}
//       </div>
//     );
//   }

// }

// export default Conditionalrendering;