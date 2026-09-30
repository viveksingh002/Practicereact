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


//Q2. Simple Contact Form
import { useState} from "react";

function Formhandling(){
const[user,setUser]=useState({
    name:"",
    email:"",
    message:""
});
function handelSubmit(e){
    e.preventDefault();
    console.log(user);
}
return(
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
    value={user.message}
    placeholder="Enter the message"
    type="text"
    onChange={(e)=>setUser({...user,message:e.target.value})}
/>
<button>Submit</button>
    </form>
)
}

export default Formhandling;