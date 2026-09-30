//Q1. Login Form

import { useState} from "react";

function Formhandling(){
const[user,setUser]=useState({
    name:"",
    email:""
});
function handlesumbit(e){
    e.preventDefault();
    console.log(user);
}
return(
    <form onSubmit={handlesumbit}>

    
        <input
        value={user.name}
            onChange={(e)=>setUser({...user,name:e.target.value})}/>
        <input
        value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}/>

            <button>sUmbit</button>
    </form>
)
}

export default Formhandling;