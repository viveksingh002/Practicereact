import { use, useState } from "react";

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

//Q6. Multiple Inputs

//  function components(){
// const[user, setUser] = useState({
//  name:"",
//  email:"",
//  age:""
// });
// return(
//   <div>
//     <input
//     value={user.name}
//     type="text"
//      onChange={(e)=>setUser({...user , name:e.target.value})}/>
//     <input
//     value={user.email}
//     type="email"
//      onChange={(e)=>setUser({...user ,email:e.target.value})}/>
//     <input
//     value={user.age}
//     type="number"
//      onChange={(e)=>setUser({...user ,age:e.target.value})}/>
     
//     <h1>Name: {user.name}</h1>
//     <h1>Email: {user.email}</h1>
//     <h1>Age: {user.age}</h1>
//   </div>
// )
   
//  }
//  export default components;


//Q7. Select Dropdown

// function components() {
//   const [course, setCourse] = useState("");

//   return (
//     <div>
//       <select
//         value={course}
//         onChange={(e) => setCourse(e.target.value)}
//       >
//         <option value="">Select Course</option>
//         <option value="CSE">CSE</option>
//         <option value="IT">IT</option>
//         <option value="ECE">ECE</option>
//       </select>

//       <h1>Selected Course: {course}</h1>
//     </div>
//   );
// }

// export default components;

//Q8. Radio Button
// function components(){
// const[gender, setGender]=useState("")

// return(
//   <div>
    
//   <label>
//         <input 
//           type="radio" 
//           checked={gender==="male"}
//               value="male"
//           onChange={(e)=>setGender(e.target.value)} /> male
//     </label>
//   <label>
//         <input 
//           type="radio" 
//           value="female"
//          checked={gender==="female"}
//           onChange={(e)=>setGender(e.target.value)} /> female
//     </label>
//   <label>
//         <input 
//           type="radio" 
//           value="other"
//           checked={gender==="other"}
//           onChange={(e)=>setGender(e.target.value)} /> other
//     </label>
//     <h1>gender: {gender}</h1>
//   </div>
// )
// }
// export default components;


// //Q8. Checkbox
// function components(){
// const[check, setCheck]=useState(false)

// return(
//   <div>
    
//   <label>
//         <input 
//           type="checkbox" 
//           checked={check}
//           onChange={(e)=>setCheck(e.target.checked)} /> I accept terms
//     </label>
  
//      {
//         check
//           ? <h1>Terms Accepted</h1>
//           : <h1>Please accept terms</h1>
//       }
//   </div>
// )
// }
// export default components;

// //Q10. Mini Profile Form
// function Components(){
// const[profile,setProfile]=useState({
//     name:"",
//     course:"",
//     email:""
// })
// const[show,setShow]=useState(false)

// return(
//     <div>
//     <label>
//         <input 
//         value={profile.name}
//         onChange={(e)=>setProfile({ ...profile,name:e.target.value})}/>Name
//         </label>
//     <label>

//         <input 
//         value={profile.email}
//         onChange={(e)=>setProfile( { ...profile,email:e.target.value})}/>Email
//         </label>
//     <label>
//         <input 
//         value={profile.course}
//         onChange={(e)=>setProfile({ ...profile,course:e.target.value})}/>Course
//         </label>
//         <button onClick={()=>setShow(true)}>Sumbit</button>
//          {show && (
//         <div>
//           <h1>Profile</h1>
//           <p>Name: {profile.name}</p>
//           <p>Email: {profile.email}</p>
//           <p>Course: {profile.course}</p>
//         </div>
//       )}
//     </div>
// )
// }
// export default Components;