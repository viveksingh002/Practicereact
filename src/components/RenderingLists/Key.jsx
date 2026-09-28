function Key(){

const fruits = [
 {
  id:1,
  name:"Apple"
 },
 {
  id:2,
  name:"Mango"
 },
 {
  id:3,
  name:"Banana"
 }
];


return(
<div>

{
 fruits.map((fruit)=>(
   <h1 key={fruit.id}>
     {fruit.name}
   </h1>
 ))
}

</div>
)

}

export default Key;