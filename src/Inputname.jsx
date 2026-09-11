import { useState } from "react";
function Input(){
const[value,setValue]=useState("");
// function test(e){
//     value(setValue(e.target.value))
// }
function hide(){
    setValue("")
}
return(
    <div>
    <h1>{value}</h1>
    <h2>Character:{value.length}</h2>
        <input value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={hide}>Clear</button>
    </div>
)
}
export default Input