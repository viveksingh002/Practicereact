import { useState } from "react";

function Text() {
  const [show, setShow] = useState(true);

 

  return (
    <div>
      {show && <h1>Secret Data</h1>} {/* && → If the condition is true, show something. */}

      <button onClick={()=>setShow(!show)}>
      {
        show ? "Hide" : "show"  //? : → If the condition is true, show A; if it is false, show B.
      }
      </button>


    </div>
  );
}

export default Text;
