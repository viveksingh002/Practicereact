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

import { useState } from "react";
function Ternaryoperator(){
    const password=12345;
    const[value,setvalue]=useState(true)
return(
    <div>
        <button onClick={()=>setvalue(!value)}>
            {
                value?"hide pass":"show pass"
            }
        </button>
        {
            value?<h1>{password}</h1>:<h1></h1>
        }
    </div>
)
}
export default Ternaryoperator;