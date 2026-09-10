// function Test (){
//     function color(){
//         document.body.textContent="red";
//     }

//     return(
//         <div>
//             <button onClick={color}>Color</button>
//         </div>
//     )
// }
// export default Test;



// import { useState } from "react";

// function Test() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//    <h1>{name}</h1>
//       <input onChange={(e)=>setName(e.target.value)}></input>
//     </div>
//   );
// }

// export default Test;

import { useState } from "react";

function Test() {
  const [name, setName] = useState("");

  function clearName() {
    setName("");
  }

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>Hello, {name}</h1>

      <button onClick={clearName}>
        Clear
      </button>
    </div>
  );
}

export default Test;