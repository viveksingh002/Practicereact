//Q1. Login Form

// import { useState} from "react";

// function Formhandling(){
// const[user,setUser]=useState({
//     name:"",
//     email:""
// });
// function handlesumbit(e){
//     e.preventDefault();
//     console.log(user);
// }
// return(
//     <form onSubmit={handlesumbit}>

    
//         <input
//         value={user.name}
//             onChange={(e)=>setUser({...user,name:e.target.value})}/>
//         <input
//         value={user.email}
//             onChange={(e)=>setUser({...user,email:e.target.value})}/>

//             <button>Sumbit</button>
//     </form>
// )
// }

// export default Formhandling;


// //Q2. Simple Contact Form
// import { useState} from "react";

// function Formhandling(){
// const[user,setUser]=useState({
//     name:"",
//     email:"",
//     message:""
// });
// function handelSubmit(e){
//     e.preventDefault();
//     console.log(user);
// }
// return(
//     <form onSubmit={handelSubmit}>
// <input
//     value={user.name}
//     placeholder="Enter the name"
//     type="text"
//     onChange={(e)=>setUser({...user,name:e.target.value})}
// />
// <input
//     value={user.email}
//     placeholder="Enter the email"
//     type="email"
//     onChange={(e)=>setUser({...user,email:e.target.value})}
// />
// <input
//     value={user.message}
//     placeholder="Enter the message"
//     type="text"
//     onChange={(e)=>setUser({...user,message:e.target.value})}
// />
// <button>Submit</button>
//     </form>
// )
// }

// export default Formhandling;

//Q3. Registration Form

import { useState} from "react";

function Formhandling(){
const[user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    age:""
});
const[show,setShow]=useState(false)
function handelSubmit(e){
    e.preventDefault();
    console.log(user);
}
return(
    <div>
    <form onSubmit={handelSubmit}>
<input
    value={user.name}
    placeholder="Enter the name"
    type="text"
    onChange={(e)=>setUser({...user,name:e.target.value})}
/>
<input
    value={user.email}
    placeholder="Enter the email"
    type="email"
    onChange={(e)=>setUser({...user,email:e.target.value})}
/>
<input
    value={user.password}
    placeholder="Enter the password"
    type="password"
    onChange={(e)=>setUser({...user,password:e.target.value})}
/>
<input
    value={user.age}
    placeholder="Enter the age"
    type="number"
    onChange={(e)=>setUser({...user,age:e.target.value})}
/>
<button
type="submit"
 onClick={()=>setShow(true)}>Submit</button>
<button 
type="button"
onClick={()=>{setUser({
      name: "",
      email: "",
      password: "",
      age: ""
    });
    setShow(false);
    }}>Reset</button>
    </form>

    {
        show&&(<div><h1>Registration Data:</h1>
    <h2>Name: {user.name}</h2>
    <h2>Email: {user.email}</h2>
    <h2>Age: {user.age}</h2></div>)
    }
    
    </div>
)
}

export default Formhandling;