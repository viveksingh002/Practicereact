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
import { useState } from "react";

function Ternaryoperator() {
  const [value, setValue] = useState(false);

  const fetchData = () => {
    setTimeout(() => {
      setValue(true);
    }, 2000);
  };

  return (
    <div>
      <h1>
        {value ? "Data Loaded" : "Loading..."}
      </h1>

      <button onClick={fetchData}>Fetch data</button>
    </div>
  );
}

export default Ternaryoperator;