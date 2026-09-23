function Array(){
const fruits = ["Apple", "Mango", "Banana"];
return(
    <div>
            <h1>{fruits[0]}</h1>
           <h2>{fruits[2]}</h2> 
           <h2>This is the array length {fruits.length}</h2> 
    </div>
)
}
export default Array;