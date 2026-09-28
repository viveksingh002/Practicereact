import { useState } from "react";

// function Components() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//       value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button onClick={() => setName("Rahul")}>
//         Rahul
//       </button>

//       <h1>{name}</h1>
//     </div>
//   );
// }

// export default Components;


//Q1. Name Input

//  function components(){
// const[name, setName] = useState("")
// return(
//   <div>
//     <input
//     value={name}
//      onChange={(e)=>setName(e.target.value)}/>
//     <h1>Hello {name}</h1>
//   </div>
// )
   
//  }
//  export default components;


 //Q2. Email Input
//  function components(){
// const[email, setEmail] = useState("")
// return(
//   <div>
//   {/* {email.includes("@") && <h1>Your Email: {email}</h1>} */}

 
//     <input
//     value={email}
//     type="email"
//      onChange={(e)=>setEmail(e.target.value)}/>
//      <h1>Your Email: {email}</h1>
//   </div>
// )
   
//  }
//  export default components;


// // Q3. Password Show
// function Components(){
// const[display, setDisplay]=useState("")
// const[show,setShow]=useState("")
// return(
//   <div>
//     <input 
//       value={display}
//       onChange={(e)=>setDisplay(e.target.value)}
//     />
//     <button onClick={()=>setShow(display)}>Show pass</button>
//     <h1>Password: {show}</h1>
//   </div>
// )
// }
// export default Components;


//Q4. Clear Input Button

//  function components(){
// const[name, setName] = useState("")
// return(
//   <div>
//     <input
//     value={name}
//      onChange={(e)=>setName(e.target.value)}/>
//      <button onClick={()=>setName("")}>Clear</button>
//     <h1>Hello {name}</h1>
//   </div>
// )
   
//  }
//  export default components;

//Q5. Live Character Counter

//  function components(){
// const[name, setName] = useState("")
// return(
//   <div>
//     <input
//     value={name}
//      onChange={(e)=>setName(e.target.value)}/>
     
//     <h1>Hello {name}</h1>
//     <h1>Characters: {name.length}</h1>
//   </div>
// )
   
//  }
//  export default components;