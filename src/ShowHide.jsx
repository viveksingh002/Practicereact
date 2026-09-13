import { useState } from "react";

function Text() {
  const [show, setShow] = useState(true);

  function hide() {
    setShow(false);
  }

  function showText() {
    setShow(true);
  }

  return (
    <div>
      {show && <h1>Secret Data</h1>}

      <button onClick={()=>setShow(!show)}>
      {
        show ? "Hide" : "show"
      }
      </button>


    </div>
  );
}

export default Text;
