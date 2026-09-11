import { useState } from "react"

// function Counter(){
// const [count,setCount] = useState(0);

// function increase(){
//     setCount(count+1);
// }
// return(
//     <div>
//     <h1>{count}</h1>
//         <button onClick={increase}>Increse</button>
//     </div>
// )
// }


// Counter wth three button

function Counter(){
const[count,setCount]=useState(0);
function Increase(){
    setCount(count+1);
}
function decrease(){
    setCount(count-1);
}
function reset(){
    setCount(0);
}
return(
    <div>
        <h1>Value{count}</h1>
        <button onClick={Increase}>Increase </button>
        <button onClick={decrease}>Decrease </button>
        <button onClick={reset}>Reset </button>
    </div>
)
}

export default Counter