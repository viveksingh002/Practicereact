import { useState } from "react";
function Ternaryoperator(){
    const[value,setvalue]=useState(true)

return(
    <div>
    {
    value ? <h1>Please login</h1>: <h1>Log out</h1>
    }
        <button onClick={()=>setvalue(!value)}>
            {
                value?"Log in":"Log out"
            }
        </button>
    </div>
)
}
export default Ternaryoperator;