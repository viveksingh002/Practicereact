import { useState } from "react";


function Count(){

  const [count,setCount] = useState(0);


  function increase(){
    setCount(count+1);
  }


  return(
    <div>

      <h1>Count: {count}</h1>

      <button onClick={increase}>
        Increase
      </button>

    </div>
  )

}



function Game(){

  const [name,setName] = useState("");


  return(
    <div>

      <input 
        onChange={(e)=>setName(e.target.value)}
      />

      <h1>Hello {name}</h1>

    </div>
  )

}



function App(){

  return(
    <div>

      <Count/>

      <Game/>

    </div>
  )

}


export default App;