//Q1. Login Form


// import { useState} from "react";

// function Formhandling(){
// const[user,setUser]=useState({
//     name:"",
//     email:""
// });
// function handlesumbit(e){
//     e.preventDefault();
//     console.log(user);
// }
// return(
//     <form onSubmit={handlesumbit}>

    
//         <input
//         value={user.name}
//             onChange={(e)=>setUser({...user,name:e.target.value})}/>
//         <input
//         value={user.email}
//             onChange={(e)=>setUser({...user,email:e.target.value})}/>

//             <button>Sumbit</button>
//     </form>
// )
// }

// export default Formhandling;


// //Q2. Simple Contact Form
// import { useState} from "react";

// function Formhandling(){
// const[user,setUser]=useState({
//     name:"",
//     email:"",
//     message:""
// });
// function handelSubmit(e){
//     e.preventDefault();
//     console.log(user);
// }
// return(
//     <form onSubmit={handelSubmit}>
// <input
//     value={user.name}
//     placeholder="Enter the name"
//     type="text"
//     onChange={(e)=>setUser({...user,name:e.target.value})}
// />
// <input
//     value={user.email}
//     placeholder="Enter the email"
//     type="email"
//     onChange={(e)=>setUser({...user,email:e.target.value})}
// />
// <input
//     value={user.message}
//     placeholder="Enter the message"
//     type="text"
//     onChange={(e)=>setUser({...user,message:e.target.value})}
// />
// <button>Submit</button>
//     </form>
// )
// }

// export default Formhandling;

//Q3. Registration Form

// import { useState} from "react";

// function Formhandling(){
// const[user,setUser]=useState({
//     name:"",
//     email:"",
//     password:"",
//     age:""
// });
// const[show,setShow]=useState(false)
// function handelSubmit(e){
//     e.preventDefault();
//     console.log(user);
// }
// return(
//     <div>
//     <form onSubmit={handelSubmit}>
// <input
//     value={user.name}
//     placeholder="Enter the name"
//     type="text"
//     onChange={(e)=>setUser({...user,name:e.target.value})}
// />
// <input
//     value={user.email}
//     placeholder="Enter the email"
//     type="email"
//     onChange={(e)=>setUser({...user,email:e.target.value})}
// />
// <input
//     value={user.password}
//     placeholder="Enter the password"
//     type="password"
//     onChange={(e)=>setUser({...user,password:e.target.value})}
// />
// <input
//     value={user.age}
//     placeholder="Enter the age"
//     type="number"
//     onChange={(e)=>setUser({...user,age:e.target.value})}
// />
// <button
// type="submit"
//  onClick={()=>setShow(true)}>Submit</button>
// <button 
// type="button"
// onClick={()=>{setUser({
//       name: "",
//       email: "",
//       password: "",
//       age: ""
//     });
//     setShow(false);
//     }}>Reset</button>
//     </form>

//     {
//         show&&(<div><h1>Registration Data:</h1>
//     <h2>Name: {user.name}</h2>
//     <h2>Email: {user.email}</h2>
//     <h2>Age: {user.age}</h2></div>)
//     }
    
//     </div>
// )
// }

// export default Formhandling;

//Q4. Feedback Form


// import { useState} from "react";

// function Formhandling(){
// const[user,setUser]=useState({
//     name:"",
//     feedback:"",
    
// });
// const[show,setShow]=useState(false)
// function handelSubmit(e){
//     e.preventDefault();
//     console.log(user);
// }
// return(
//     <div>
//         <form onSubmit={handelSubmit}>
//         <input
//             value={user.name}
//             placeholder="Enter the name"
//             onChange={(e)=>setUser({...user,name:e.target.value})}
//         />
//         <input
//             value={user.feedback}
//             placeholder="Enter the feedback"
//             onChange={(e)=>setUser({...user,feedback:e.target.value})}
//         />
//         <button onClick={()=>setShow(true)}>Submit</button>
//         </form>
//         {show&&(<div>
//             <h2>Thank You {user.name}</h2>
//         <h2>Your Feedback: {user.feedback}</h2>
//         </div>)}
        
//     </div>
// )
// }

// export default Formhandling;

//Q5. Search Form



// import { useState} from "react";

// function Formhandling(){
// const[product,setProduct]=useState("");
// const[show,setShow]=useState(false)
// function handelSubmit(e){
//     e.preventDefault();
//     console.log(product);
// }
// return(
//     <div>
//         <form onSubmit={handelSubmit}>
//             <input
//             placeholder="Search the product"
//             value={product}
//                 onChange={(e)=>setProduct(e.target.value)}
//             />
//             <button onClick={()=>setShow(true)}>Search</button>
//         </form>
//         {
//             show&&<h1>Searching for {product}</h1>
//         }
//     </div>
// )
// }

// export default Formhandling;


//Q6. Profile Update Form


// import { useState} from "react";



// function Formhandling(){
// const[form,setForm]=useState({
//   name: "",
//   course: "",
//   college: ""
// })
// const[show,setShow]=useState(false)
// function handelsubmit(e){
// e.preventDefault();
// console.log(form);
// }

// return(
//     <div>
//         <form onSubmit={handelsubmit}>
//             <input 
//                 value={form.name}
//                 onChange={(e)=>setForm({...form,name:e.target.value})}
//             />
//             <input 
//                 value={form.course}
//                 onChange={(e)=>setForm({...form,course:e.target.value})}
//             />
//             <input 
//                 value={form.college}
//                 onChange={(e)=>setForm({...form,college:e.target.value})}
//             />
//             <button onClick={()=>setShow(true)} >Submit</button>
//             <button onClick={()=>setShow(false)} >Reset</button>
//         </form>
// {
//     show&&<div>
// <h1>Profile</h1>
// <h2>Name: {form.name}</h2>
// <h2>Course: {form.course}</h2>
// <h2>College: {form.college}</h2>
//     </div>
// }
//     </div>
// )
// }

// export default Formhandling;

//Q7. Add Product Form

// import { useState } from "react";
// function Formhandling(){
// const[product,setProduct]=useState({
//     name:"",
//     price:"",
//     category:""
// })
// function handelsubmit(e){
//     e.preventDefault();
//     console.log(product);
// } 
// return(
//     <div>
//         <form onSubmit={handelsubmit}>
//             <input
//             value={product.name}
//             type="text"
//             onChange={(e)=>setProduct({...product,name:e.target.value})}/>
//             <input
//             value={product.price}
//             type="number"
//             onChange={(e)=>setProduct({...product,price:e.target.value})}/>
//             <input
//             value={product.category}
//             type="number"
//             onChange={(e)=>setProduct({...product,category:e.target.value})}/>
//             <button>Submit</button>
//         </form>
//     </div>
// )
// }
// export default Formhandling;


// //Q8. Todo Add Form
// import { useState } from "react";
// function Formhandling(){
// const[todos,setTodos]=useState([]);
// const[task,setTask]=useState("")
// function handelsubmit(e){
//     e.preventDefault();
//     setTodos([...todos,task]);
// setTask("");
//     console.log({task});

// }
// return(
//     <div>
//         <form onSubmit={handelsubmit}>
//             <input 
//             onChange={(e)=>setTask(e.target.value)}/>
//             <button >Add Task</button>
//         </form>
// {
//     todos.map((todo,index)=>(
//         <h1 key={index}>{todo}</h1>
//     ))
// }
//     </div>
// )
// }
// export default Formhandling;

//form with array
import { useState } from "react";
function Formhandling(){
const[form,setForm]=useState({
    name:"",
    class:""
})
const[list,setList]=useState([])
function handelsubmit(e){
    e.preventDefault();
    setList([...list,form]);
    console.log({form})
}
return(
    <div>
        <form onSubmit={handelsubmit}>
            <input 
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}/>
            <input 
            value={form.class}
            onChange={(e)=>setForm({...form,class:e.target.value})}/>
            <button>Submit</button>
        </form>
        {
            list.map((lists,index)=>(
                <div key={index}>
                <h1>Name: {lists.name}</h1>
                <h1>Class: {lists.class}</h1>
                </div>
            ))
        }
    </div>
)
}
export default Formhandling;