import { useState } from "react";

function Conditionalrendering() {

  const [value, setValue] = useState(false);

  function log() {
    return (
      <div>
        <button onClick={() => setValue(true)}>Log in</button>
      </div>
    );
  }

  if (value) {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => setValue(false)}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please login</h1>
        {log()}
      </div>
    );
  }

}

export default Conditionalrendering;