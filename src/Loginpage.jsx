
import { useState } from "react";

function Loginform() {
  const [value, setValue] = useState("");
  const [welcome, setWelcome] = useState("");

  function login() {
    setWelcome(value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "250px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Welcome {welcome}
      </h1>

      <input
        placeholder="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <input placeholder="Password" type="password" />

      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Loginform;
